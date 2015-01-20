#-*- coding:utf-8 -*-

from com.mylib.tables import tables
class OrderTable(tables.Table):
    sn = tables.Column(sTitle=u'单号',bSortable=False)
    #name = tables.Column(sTitle=u'名称', bSortable=False)
    user = tables.Column(sTitle=u'用户名', bSortable=False,accessor=lambda x:x.member.username)
    real_name = tables.Column(sTitle=u'姓名', bSortable=False,accessor=lambda x:x.member.real_name)
    phone = tables.Column(sTitle=u'手机', bSortable=False,accessor=lambda x:x.member.phone)
    room = tables.Column(sTitle=u'房号', bSortable=False,accessor=lambda x:x.room.name)
    room_type = tables.Column(sTitle=u'房型', bSortable=False,accessor=lambda x:x.room_type.name)
    price = tables.Column(sTitle=u'价格', bSortable=False,accessor=lambda x:x.room_type.price)
    comment = tables.Column(sTitle=u'说明', bSortable=False)
    status = tables.Column(sTitle=u'状态', bSortable=False,accessor=lambda x:x.get_status_display())
    action= tables.Column(sTitle=u'操作', bSortable=False, accessor='view')#tables.Table.CALLBACK)    
    
    @classmethod
    def get_action(cls,user=None):
        actions = ['view']
        actions.append('delete')
        return ','.join(actions)