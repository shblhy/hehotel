# -*- coding: utf-8 -*-
from django.http import HttpResponse,HttpResponseBadRequest
from django.shortcuts import render_to_response,get_object_or_404
from member.models import User
from member.table import UserTable
from member.form import UserForm,UserQForm
from django.contrib.auth.decorators import login_required

@login_required
def users(request):
    form = UserQForm(request.GET)
    if not form.is_valid():
        return HttpResponseBadRequest(form.errors.as_text())
    condition = form.get_condition()
    q = User.objects.filter(**condition)
    table = UserTable(
        query=q,
        limit=form.cleaned_data['iDisplayLength'],
        offset=form.cleaned_data['iDisplayStart'],
        order_by=form.cleaned_data['orderBy'],
        reverse_accessors = {
            'action':lambda x:UserTable.get_action(x,request.user)
            }
    )
    print table.get_columns()
    print table.get_rows()
    return render_to_response('member/users.html',locals())

@login_required
def user_input(request,action='add',user_id=None):
    if user_id:
        user = get_object_or_404(User,pk=user_id)
    else:
        user = User()
    return render_to_response('member/user_input.html',locals())

def regist(request,action='add',user_id=None):
    form = UserForm(request.POST)
    if form.is_valid():
        user = form.instance
        user.set_password(user.password)
        user.is_staff = True
        user.save();
        return HttpResponse('')
    return HttpResponseBadRequest(form.errors.as_text())

@login_required
def user_detail(request,user_id=None):
    user = get_object_or_404(User,pk=user_id)
    return render_to_response('member/user.html',locals())

def input_user(request,user_id):
    form = UserForm(request.POST)
    if form.is_valid():
        form.save();
        return HttpResponse('')
    return HttpResponseBadRequest(form.errors.as_text())

def import_users(request):
    
    return HttpResponse(u'开发中')

@login_required
def delete_users(request):
    try:
        User.objects.filter(id__in = request.POST['ids'].split(',')).delete()
    except Exception,e0:
        return HttpResponseBadRequest(u'删除失败:'+e0.message,mimetype='application/javascript')