# -*- coding: utf-8 -*-
import unittest
from room.models import Room,RoomType
import django
django.setup()

class RoomTest(unittest.TestCase):
    def runTest(self):
        #print test_get_random_room()
        print test_get_room_using()
        #test_save_room_type()
#def test_get_random_room():
#    return Room.objects.raw('select * from room where status=0 and room_type_id=2 Order By Rand() Limit 1')[0]
    
def test_save_room_type():
    '''
    rtype = RoomType()
    rtype.name = '标双222'
    rtype.photo = 'test.jpg'
    rtype.comment = 'test'
    rtype.save()
    '''
    r = Room.objects.filter(status=1)
def test_get_room_using():
    r = Room.objects.filter(status=1)[0]
    #f = lambda x:x.pk
    #f = lambda x:x.order_set.all()[0].member_id
    f = lambda x:x.order_set.all()[0].member.real_name if x.status in [] else  u'无'
    return f(r)