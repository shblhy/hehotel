#!/usr/bin/env python
#-*- coding:utf-8 -*-

"""
@author:hy 
扩展 django的form，更好地获取参数
可获取其validator正则
"""

from django.forms import IntegerField,HiddenInput
from django.core.exceptions import ValidationError
from django.core.paginator import Paginator
from django.utils.encoding import  force_unicode,StrAndUnicode
from django.forms.forms import Form
from django.forms.models import ModelForm

class MyErrorList(list, StrAndUnicode):
    """
    A collection of errors that knows how to display itself in various formats.
    """
    def __unicode__(self):
        return ''.join([force_unicode(e) for e in self])

    def as_text(self):
        if not self: return u''
        return u'\n'.join([u'* %s' % force_unicode(e) for e in self])

    def __repr__(self):
        return repr([force_unicode(e) for e in self])
    
    def errors_as_text(self):
        errorList = [u'* %s(%s)%s' % (self.fields[k].label,k, v) for k, v in self.errors.items()] 
        return u'\n'.join(errorList)

class BaseForm(object):
    def errors_as_text(self):
        errorList = [u'* %s(%s)%s' % (self.fields[k].label,k, v) for k, v in self.errors.items()] 
        return u'\n'.join(errorList)
    
    def errors_as_json(self):
        return [(self.fields[k].label,k, v) for k, v in self.errors.items()]
    
class ExForm(BaseForm):
    def __init__(self,*args, **kwargs):
        super(ExForm,self).__init__(error_class=MyErrorList,*args, **kwargs)
        
    def populate_obj(self, obj):
        for name, value in self.cleaned_data.items():
            setattr(obj, name, value)
        return obj

class PageField(IntegerField):
    def __init__(self, *args, **kwargs):
        if not kwargs:
            kwargs = {}
        if 'default' in kwargs:
            self.default = kwargs.pop('default')
        else:
            self.default = 0
        kwargs['widget'] = HiddenInput
        kwargs['required'] = False
        kwargs['label'] = ''
        kwargs['min_value'] = 0
        super(PageField, self).__init__(*args, **kwargs)

    def to_python(self, value):
        value = super(PageField, self).to_python(value)
        if value is None:
            value = self.default
        return value
    
class EqForm(BaseForm):
    page = PageField(default=0)
    page_size = PageField(default=100)
    #page_size =
    #order_by =  
    TABLE_KEYS=  ['page','page_size','page_num','page_length','order_by','iDisplayStart','iDisplayLength','orderBy']
    def get_conditions(self):
        '''遍历form所有字段，如果cleaned_data存在它，则它作为数据库查询条件'''
        conditions = {}
        for key in self.cleaned_data:            
            if not key in EqForm.TABLE_KEYS and self.cleaned_data.get(key):
                conditions[key] = self.cleaned_data[key]
        return conditions
    
def validate_unique_caller(label, name, model_class, action, id=0):
    def caller(value):
        if action == 'new' and model_class.objects.filter(**{name: value}).exists():
            raise ValidationError(u'%s不能重复' % label)
        elif action == 'edit' and model_class.objects.exclude(id=id).filter(**{name: value}).exists():
            raise ValidationError(u'%s不能重复' % label)
    return caller


def validate_import_unique_caller(label, name, model_class):
    def caller(value):
        if model_class.objects.filter(**{name: value}).exists():
            raise ValidationError(u'%s不能重复' % label)
    return caller