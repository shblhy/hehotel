/*!
 * Dossm reservation entrance v1.1
 * Copyright 2012 Wintour, Inc.
 * Description: Popup type reservation entrance.
 * Author: sam.zeng@wintour.cn
 * Date: 08/06/2012
 */
/**
 * Dom ready (Required jQuery.js)
 */
$(document).ready(function() {

    if ($('#js-reservation-entrance').length) {
        var reservationEntrance = function(left, width) {
            // Set default
            var isEntranceOpened = true;

            // Open entrance
            entranceOpened = function() {
                if (isEntranceOpened) {
                    return;
                }
                isEntranceOpened = true;
                $('#js-reservation-entrance').animate({
                    'left': 0
                }, 1500, 'swing');
            }

            // Close entrance
            entranceClose = function() {
                // If close entrance then hide calendar
                if ($('#CalFrame').length && !$('#CalFrame').is(':hidden')) {
                    hideCalendar();
                }

                if( !isEntranceOpened ) {
                    return;
                }

                isEntranceOpened = false;
                $('#js-reservation-entrance').animate({
                    'left': width
                }, 1500);
            }

            // Set default time
            var hideTime = 0;

            // Auto close entrance
            entranceAutoClose = function() {
                clearTimeout(hideTime);
                hideTime = setTimeout(function() {
                    entranceClose();
                }, 5000);
            }

            // Toggle entrance
            var entranceToggle = function() {
                if (!isEntranceOpened) {
                    entranceOpened();
                } else {
                    entranceClose();
                }
            }

            entranceAutoClose();

            // When mouse hover,clear time
            $('#js-reservation-entrance').hover(function() {
                clearTimeout(hideTime);
            });

            $('#js-reservation-entrance-trigger').click(function() {
                entranceOpened();
            });
            // Button
            $('#js-reservation-entrance-close').click(function() {
                entranceClose();
            });
        }

        if ($('#book-index').length) {
            reservationEntrance(230, 230);
        } else {
            reservationEntrance(230, 230);
        }

        $('#rblOrderType').find('input[type="radio"]').eq(1).click()
        $('#room-res-submit').click(function () {
            var radio = $('input[name="promotional-code"]:checked').val(),
                start_date = $('#book-check-in').val(),
                end_date = $('#book-check-out').val(),
                pmt_code = $('#js-promotional-code').val().trim(),
                url = 'room_reservation.html?start_date=' + start_date +
                        '&end_date=' + end_date;
            if (radio === '1' && pmt_code !== '') {
                url += '&pmt-code=' + pmt_code;
            }
            setTimeout(function () {
                window.location = url;
            }, 0);
            return false;
        });

    }
});
