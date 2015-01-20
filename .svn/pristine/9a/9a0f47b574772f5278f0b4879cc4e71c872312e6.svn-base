# -*- coding: utf-8 -*-
import unittest
from article.models import Article
from room.models import RoomType
#from member.models import User

class Article2Test(unittest.TestCase):
    def runTest(self):
        #test_save_room_type()
        test_save_article()
#def test_get_random_room():
#    return Room.objects.raw('select * from room where status=0 and room_type_id=2 Order By Rand() Limit 1')[0]
    
def test_save_room_type():
    rtype = RoomType()
    rtype.name = '标双223'
    rtype.photo = 'test.jpg'
    rtype.comment = 'test'
    rtype.save()
    
def test_save_article():
    #b= Article.objects.get(pk=1)
    a = Article()
    a.title = '标题1'
    a.content = '内容1'
    a.author_id = 1
    a.save()
    #s= a.edit_time
    #s 