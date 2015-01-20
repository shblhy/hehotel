(function($){
    $.fn.DossmValidat = function( id, callback, check ) {
        var form = $(this);
        var methods = {
            _regex : {
                email: function (val){ // 邮箱
                    var rule = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
                    return rule.test(val);
                },
                phone: function (val){ // 手机
                    var rule = /^\(?\d{2,3}[- ]?\d{1,3}\)?[- ]?\d{3,4}[- ]?\d{4}$/;
                    return rule.test(val);
                },
                tell: function (val){ // 固话
                    var rule = /\d{3}-\d{8}|\d{4}-\d{7,8}/;
                    return rule.test(val);
                },
                number: function (val){ // 数字
                    var rule = /^[\-\+]?((\d+)([\.,](\d+))?|([\.,](\d+))?)$/;
                    return rule.test(val);
                },
                url: function (val){ // 网址
                    var rule = /^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*/;
                    return rule.test(val);
                },
                pwd: function (val){ // 密码
                    var rule = /^(\w){6,20}$/;
                    return rule.test(val);
                },
                confpwd: function (val){ // 确认密码
                    var value = form.find('#order-password').val(); // 密码框
                    return value === val;
                },
                select: function (val){ // 下拉框
                    if( val == -1 || val === '' ) {
                        return false;
                    }
                    return true;
                }
            },
            _required : function(_self, textValue, rules) {
                var _class = $('.text-error-' + _self.id ),
                    val = $(_self).val();
                if( rules && !this._regex[rules](val) || $(_self).val() === '' ) {
                    _class.html( textValue ).show();
                    return false;
                }
                _class.html( '' ).hide();
                return true;
            }
        }
        
        var classValidat = form.find('[class*=validate]').not('div').not('input[type="radio"]'),
            radioValidat = form.find('input[type="radio"][class*=validate]');
        var validate = function(_self, textValue) {
            var newStyle = 'validat-error-' + $(_self).attr('id'),
                _newStyle = $('.' + newStyle),
                _class = $(_self).attr('class'),
                getRules = /validate\[(.*)\]/.exec(_class);
            if ( !getRules ) {
                return false;
            }
            var str = getRules[1],
                rules = str.split(/\[|,|\]/);
            if(rules.length === 1) {
                if( !methods._required(_self, textValue) ) {
                    $(_self).parent().addClass('check-error');
                    return false;
                }
            } else {
                if( !methods._required(_self, textValue.split('|')[0]) ) {
                    $(_self).parent().addClass('check-error');
                    return false;
                }
                if( !methods._required(_self, textValue.split('|')[1], rules[1]) ) {
                    $(_self).parent().addClass('check-error');
                    return false;
                }
            }
            $(_self).parent().removeClass('check-error');
            return true;
        }
        $.each(classValidat, function() {
            var _self = this,
                textValue = $(this).parent().find('.form-error').html();
            if( !_self.id ){
                var _arr = $(_self).attr('class').split(' ');
                $.error( _arr[_arr.length - 1] + ' no id!');
                return;
            }
            var errorText = '<span style="display:none;"'
                + ' class="text-error-info text-error-'
                + _self.id + '"></span>';
            if( $('.text-error-' + _self.id ).length > 0 ) {
                $('.text-error-' + _self.id ).remove();
            }
            $(_self).parent().find('.form-error').before(errorText);
            var _eventName = 'blur';
            if( $(this).is('select') ) {
                _eventName = 'change';
            }
            $(this).bind( _eventName , function() {
                validate(_self, textValue);
                if( check ) {
                    check(_self);
                }
            });
        });
        var checkRadio = function() {
            var b = 1,
                str = '',
                arr = [];
            $.each(radioValidat, function() {
                if( str.indexOf( this.name ) === -1 ) {
                    arr.push({
                        name: this.name,
                        _self: this
                    });
                }
                str += this.name;
            });
            $.each(arr, function() {
                if( !$('input[name="' + this.name + '"]').is(':checked') ) {
                    var parent = $(this._self).parent().parent(),
                        tv = parent.find('.form-error').html(),
                        errorText = '<span class="text-error-info text-error-'
                        + this.name + '">' + tv + '</span>';
                    parent.find('.text-error-' + this.name).remove();
                    parent.append( errorText );
                    $('input[name="' + this.name + '"]').click(function() {
                        parent.find('.text-error-' + this.name).remove();
                    });
                    b = 0;
                }
            });
            if( check ) {
                check();
            }
            return b;
        }
        $(id).click(function () {
            var b = 1,
                c = 1;
            if( radioValidat.length > 0 ) {
                b = checkRadio();
            }

            $.each(classValidat, function() {
                var textValue = $(this).parent().find('.form-error').html() || '';
                if( !validate(this, textValue) ) {
                    var _s = $(this);
                    if (c === 1) {
                        setTimeout(function () {
                            _s.focus();
                        });
                        c = 0;
                    }
                    b = 0;
                }
            });
            if( check ) {
                check('click');
            }
            if( b ) {
                callback();
            }
        });
    }
})(jQuery);