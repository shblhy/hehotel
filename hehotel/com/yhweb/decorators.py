# -*- coding: utf-8 -*-
from django.http import HttpResponseRedirect

def login_on(func):
    def _login_on(*args, **kwargs):
        request=args[0]
        #此类均有标注"""该方法允许本机user为None""" 用于导出export方法的入口。
        if request.user == None or not request.user.is_authenticated():# and get_client_ip(request) <> "127.0.0.1" :
            return HttpResponseRedirect('/')
        return func(*args, **kwargs)
    return _login_on