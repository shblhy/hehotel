# -*- coding: utf-8 -*-
import json
from django.contrib.admin.forms import AdminAuthenticationForm
from django.contrib.auth.models import Group
from django.contrib.auth.views import  login as auth_login,password_change,password_change_done,logout
from django.http import HttpResponse,HttpResponseForbidden,HttpResponseBadRequest
from django.shortcuts import render_to_response,get_object_or_404
from member.table import GroupTable
from django.contrib.auth.decorators import login_required

@login_required
def groups(request):
    condition = {}
    q = Group.objects.filter(**condition)
    table = GroupTable(
        query=q,
        limit=30,
        offset=0,
        order_by='0',
        reverse_accessors = {
            'action':lambda x:GroupTable.get_action(x,request.user)
            }
    )
    print table.get_columns()
    print table.get_rows()
    return render_to_response('member/groups.html',locals())

@login_required
def group_input(request,action='add',group_id=None):
    if group_id:
        group = get_object_or_404(Group,pk=group_id)
    else:
        group = Group()
    return render_to_response('member/group_input.html',locals())