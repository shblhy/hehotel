#!/usr/bin/env python
#-*- coding:utf-8 -*-

from django import forms
from com.yhweb import exforms
from order.models import Order
from room.models import Room
from member.models import User

class OrderForm(exforms.ExForm,forms.ModelForm):
    sn = forms.CharField(required=False)
    #customer = forms.CharField(label=u'顾客',required=False)
    #phone = forms.CharField(label=u'手机号',required=False)
    #member = forms.ModelChoiceField(User.objects,required=False)
    #room = forms.ModelChoiceField(Room.objects)
    #room = forms.ModelChoiceField(Room.objects,required=False)
    #status = forms.IntegerField(required=False)
    #note = forms.CharField(required=False)
    
    class Meta:
        model = Order
        exclude = ['room','status','member']


class OrderQForm(forms.Form):
    sn = forms.CharField(label=u'订单号', required=False)
    customer = forms.CharField(label=u'顾客', required=False)
    phone = forms.CharField(label=u'手机号', required=False)
    member = forms.ModelChoiceField(User.objects, required=False)
    note = forms.CharField(label=u'备注', required=False)
    room = forms.ModelChoiceField(Room.objects, required=False)
    status = forms.IntegerField(label=u'状态', required=False)
    note_like = forms.CharField(label= u'备注', required=False)    
    iDisplayStart = exforms.PageField(default=0, required=False)
    iDisplayLength = exforms.PageField(default=30, required=False)
    orderBy = forms.CharField(label='', widget=forms.HiddenInput, required=False)
    
    def get_condition(self):
        form = self
        conditions = {}
    
        return conditions