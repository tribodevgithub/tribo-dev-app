function _createForOfIteratorHelper(e, t) {
    var a;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (a = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
            a && (e = a);
            var n = 0,
                i = function() {};
            return {
                s: i,
                n: function() {
                    return n >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[n++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: i
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var r, o = !0,
        s = !1;
    return {
        s: function() {
            a = e[Symbol.iterator]()
        },
        n: function() {
            var e = a.next();
            return o = e.done, e
        },
        e: function(e) {
            s = !0, r = e
        },
        f: function() {
            try {
                o || null == a.return || a.return()
            } finally {
                if (s) throw r
            }
        }
    }
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
    return n
}! function(e) {
    "use strict";

    function t() {
        for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a = 0; a < 5; a++) e += t.charAt(Math.floor(Math.random() * t.length));
        return e
    }

    function a(e, t, a) {
        var n = {
                width: 20,
                height: 20
            },
            i = feather.icons.upload.toSvg(n),
            r = e.find(".js-file-type-volume"),
            o = e.find(".js-downloadable-input"),
            s = e.find(".js-online_viewer-input"),
            l = e.find(".js-file-path-input"),
            d = e.find(".js-s3-file-path-input"),
            c = e.find(".js-file-path-input button"),
            p = e.find(".js-file-path-input input");
        switch (c.addClass("panel-file-manager"), l.removeClass("d-none"), d.addClass("d-none"), t) {
            case "youtube":
            case "vimeo":
            case "iframe":
                r.addClass("d-none"), o.find("input").prop("checked", !1), o.addClass("d-none"), s.find("input").prop("checked", !1), s.addClass("d-none"), i = feather.icons.link.toSvg(n), c.removeClass("panel-file-manager");
                break;
            case "external_link":
            case "s3":
                r.removeClass("d-none"), a && "video" === a ? o.removeClass("d-none") : (o.find("input").prop("checked", !1), o.addClass("d-none")), "external_link" === t ? (i = feather.icons["external-link"].toSvg(n), c.removeClass("panel-file-manager")) : "s3" === t && (l.addClass("d-none"), d.removeClass("d-none")), a && "pdf" === a ? s.removeClass("d-none") : (s.find("input").prop("checked", !1), s.addClass("d-none"));
                break;
            case "google_drive":
                r.removeClass("d-none"), o.find("input").prop("checked", !1), o.addClass("d-none"), a && "pdf" === a ? s.removeClass("d-none") : (s.find("input").prop("checked", !1), s.addClass("d-none")), i = feather.icons.box.toSvg(n), c.removeClass("panel-file-manager");
                break;
            case "upload":
                r.removeClass("d-none"), o.removeClass("d-none"), a && "pdf" === a ? s.removeClass("d-none") : (s.find("input").prop("checked", !1), s.addClass("d-none"))
        }
        i && c.html(i), filePathPlaceHolderBySource && p.attr("placeholder", filePathPlaceHolderBySource[t])
    }

    function n(t) {
        var a = '<div id="extraDescriptionModal">';
        a += e("#extraDescriptionForm").html();
        var n = e(a += "</div>");
        n.find(".js-form-groups").children().remove(), n.find(".js-form-groups").append('<div class="form-group">\n            <label class="input-label">image</label>\n            <div class="input-group">\n                <div class="input-group-prepend">\n                    <button type="button" class="input-group-text admin-file-manager" data-input="image_' + t + '" data-preview="holder">\n                        <i class="fa fa-upload"></i>\n                    </button>\n                </div>\n                <input type="text" name="value" id="image_' + t + '" class="form-control"/>\n            </div>\n        </div>');
        var i = '<div id="extraDescriptionModal">';
        return i += n.html(), i += "</div>"
    }

    function i(a, i) {
        var r = a.attr("data-item-id"),
            o = a.attr("data-webinar-id"),
            s = t(),
            l = {
                item_id: o,
                locale: i
            };
        e.post("/admin/webinar-extra-description/" + r + "/edit", l, function(t) {
            if (t && t.webinarExtraDescription) {
                var a = t.webinarExtraDescription,
                    i = '<div id="extraDescriptionModal">';
                i += e("#extraDescriptionForm").html(), i += "</div>", "company_logos" === a.type && (i = n(s)), i = i.replaceAll("/admin/webinar-extra-description/store", "/admin/webinar-extra-description/" + r + "/update"), Swal.fire({
                    html: i,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "48rem",
                    onOpen: function() {
                        var t = e("#extraDescriptionModal");
                        Object.keys(a).forEach(function(e) {
                            t.find('[name="' + e + '"]').val(a[e])
                        });
                        var n = t.find('select[name="locale"]');
                        n && (n.addClass("js-edit-extraDescription-locale-ajax"), n.attr("data-item-id", r), n.attr("data-webinar-id", o))
                    }
                })
            }
        })
    }

    function r(t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = t.attr("data-ticket-id"),
            i = t.attr("data-webinar-id"),
            r = {
                item_id: i,
                locale: a
            };
        e.post("/admin/tickets/" + n + "/edit", r, function(t) {
            if (t && t.ticket) {
                var a = t.ticket,
                    r = '<div id="addTicketModal">';
                r += e("#webinarTicketModal").html(), r = (r += "</div>").replaceAll("/admin/tickets/store", "/admin/tickets/" + n + "/update"), Swal.fire({
                    html: r,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "48rem",
                    onOpen: function() {
                        e(".date-range-picker").daterangepicker({
                            locale: {
                                format: "YYYY-MM-DD"
                            },
                            drops: "down",
                            opens: "right",
                            startDate: moment(1e3 * a.start_date).toDate(),
                            endDate: moment(1e3 * a.end_date).toDate()
                        }), delete a.start_date, delete a.end_date, Object.keys(a).forEach(function(t) {
                            e("#addTicketModal").find('[name="' + t + '"]').val(a[t])
                        });
                        var t = e("#addTicketModal").find('select[name="locale"]');
                        t && (t.addClass("js-edit-ticket-locale-ajax"), t.attr("data-ticket-id", n), t.attr("data-webinar-id", i))
                    }
                })
            }
        })
    }

    function o(a) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = a.attr("data-chapter-id"),
            r = a.attr("data-webinar-id"),
            o = {
                item_id: r,
                locale: n
            };
        e.post("/admin/chapters/" + i + "/edit", o, function(a) {
            if (a && a.chapter) {
                var n = a.chapter,
                    o = '<div id="editChapterModal">';
                o += e("#webinarChapterModal").html(), o = (o += "</div>").replaceAll("/admin/chapters/store", "/admin/chapters/" + i + "/update");
                var s = t();
                o = o.replaceAll("record", s), Swal.fire({
                    html: o,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "48rem",
                    onOpen: function() {
                        var t = e("#editChapterModal");
                        Object.keys(n).forEach(function(e) {
                            if ("status" === e) {
                                var a = "active" === n.status;
                                t.find('[name="' + e + '"]').prop("checked", a)
                            } else if ("check_all_contents_pass" === e) {
                                var i = n.check_all_contents_pass && "0" !== n.check_all_contents_pass;
                                t.find('[name="' + e + '"]').prop("checked", i)
                            } else t.find('[name="' + e + '"]').val(n[e])
                        });
                        var a = t.find('select[name="locale"]');
                        a && (a.addClass("js-edit-chapter-locale-ajax"), a.attr("data-chapter-id", i), a.attr("data-webinar-id", r))
                    }
                })
            }
        })
    }

    function s(a) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = a.attr("data-session-id"),
            r = a.attr("data-webinar-id"),
            o = {
                item_id: r,
                locale: n
            };
        e.post("/admin/sessions/" + i + "/edit", o, function(a) {
            if (a && a.session) {
                var n = a.session,
                    o = '<div id="addSessionModal">';
                o += e("#webinarSessionModal").html(), o = (o += "</div>").replaceAll("/admin/sessions/store", "/admin/sessions/" + i + "/update");
                var s = t();
                o = o.replaceAll("record", s), Swal.fire({
                    html: o,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "48rem",
                    onOpen: function() {
                        var t = e("#addSessionModal"),
                            a = e(".datetimepicker");
                        a.val(n.date), a.daterangepicker({
                            locale: {
                                format: "YYYY-MM-DD HH:mm"
                            },
                            singleDatePicker: !0,
                            timePicker: !0,
                            timePicker24Hour: !0
                        }), delete n.date, Object.keys(n).forEach(function(e) {
                            if ("session_api" === e) t.find('.js-api-input[value="' + n[e] + '"]').prop("checked", !0), t.find(".js-api-input").prop("disabled", !0), "local" !== n[e] && (t.find(".js-ajax-api_secret").prop("disabled", !0), t.find(".js-ajax-date").prop("disabled", !0), t.find(".js-ajax-duration").prop("disabled", !0), t.find(".js-ajax-link").prop("disabled", !0)), "big_blue_button" === n[e] ? (t.find(".js-moderator-secret").removeClass("d-none"), t.find(".js-ajax-moderator_secret").prop("disabled", !0)) : "zoom" === n[e] ? (t.find(".js-local-link").addClass("d-none"), t.find(".js-api-secret").addClass("d-none"), t.find(".js-moderator-secret").addClass("d-none")) : "agora" === n[e] && (t.find(".js-agora-chat-and-rec").removeClass("d-none"), t.find(".js-api-secret").addClass("d-none"), t.find(".js-local-link").addClass("d-none"), t.find(".js-moderator-secret").addClass("d-none"));
                            else if ("status" === e) {
                                var a = "active" === n.status;
                                t.find('[name="' + e + '"]').prop("checked", a)
                            } else if ("check_previous_parts" === e || "access_after_day" === e) {
                                (n.check_previous_parts || null !== n.access_after_day) && (t.find(".js-sequence-content-switch").prop("checked", !0), t.find('[name="check_previous_parts"]').prop("checked", n.check_previous_parts), t.find('[name="access_after_day"]').val(n.access_after_day), t.find(".js-sequence-content-inputs").removeClass("d-none"))
                            } else if ("agora_settings" === e) {
                                var i = JSON.parse(n.agora_settings);
                                i && i.chat && (!0 === i.chat || "true" === i.chat) && t.find('[name="agora_chat"]').prop("checked", !0), i && i.record && (!0 === i.record || "true" === i.record) && t.find('[name="agora_record"]').prop("checked", !0)
                            } else t.find('[name="' + e + '"]').val(n[e])
                        });
                        var o = t.find('select[name="locale"]');
                        o && (o.addClass("js-edit-session-locale-ajax"), o.attr("data-session-id", i), o.attr("data-webinar-id", r))
                    }
                })
            }
        })
    }

    function l(t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = t.attr("data-faq-id"),
            i = t.attr("data-webinar-id"),
            r = {
                item_id: i,
                locale: a
            };
        e.post("/admin/faqs/" + n + "/edit", r, function(t) {
            if (t && t.faq) {
                var a = t.faq,
                    r = '<div id="addFAQsModal">';
                r += e("#webinarFaqModal").html(), r = (r += "</div>").replaceAll("/admin/faqs/store", "/admin/faqs/" + n + "/update"), Swal.fire({
                    html: r,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "48rem",
                    onOpen: function() {
                        var t = e("#addFAQsModal");
                        Object.keys(a).forEach(function(e) {
                            t.find('[name="' + e + '"]').val(a[e])
                        });
                        var r = t.find('select[name="locale"]');
                        r && (r.addClass("js-edit-faq-locale-ajax"), r.attr("data-faq-id", n), r.attr("data-webinar-id", i))
                    }
                })
            }
        })
    }
    e.fn.serializeObject = function() {
        var t = {},
            a = this.serializeArray();
        return e.each(a, function() {
            t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || ""
        }), t
    }, e("body").on("click", ".close-swl", function(e) {
        e.preventDefault(), Swal.close()
    }), e("#summernote").summernote({
        tabsize: 2,
        height: 400,
        placeholder: e("#summernote").attr("placeholder"),
        dialogsInBody: !0,
        toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["color", ["color"]],
            ["para", ["paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture", "video"]],
            ["view", ["fullscreen", "codeview"]]
        ]
    }), e("body").on("click", "#saveAndPublish", function(t) {
        t.preventDefault(), e("#forDraft").val("publish"), e("#webinarForm").trigger("submit")
    }), e("body").on("click", "#saveAsDraft", function(t) {
        t.preventDefault(), e("#forDraft").val(1), e("#webinarForm").trigger("submit")
    }), e("body").on("click", "#saveReject", function(t) {
        t.preventDefault(), e("#forDraft").val("reject"), e("#webinarForm").trigger("submit")
    }), e("#partnerInstructorSwitch").on("change.bootstrapSwitch", function(t) {
        t.target.checked ? (e("#partnerInstructorInput").removeClass("d-none"), resetSelect2()) : e("#partnerInstructorInput").addClass("d-none")
    }), e("body").on("change", "#categories", function(t) {
        t.preventDefault();
        var a = this.value;
        e.get("/admin/filters/get-by-category-id/" + a, function(t) {
            if (t && void 0 !== t.filters && t.filters.length) {
                var a = "";
                Object.keys(t.filters).forEach(function(e) {
                    var n = t.filters[e],
                        i = [];
                    n.options.length && (i = n.options), a += '<div class="col-12 col-md-3">\n<div class="webinar-category-filters">\n<strong class="category-filter-title d-block">' + n.title + '</strong>\n<div class="py-10"></div>\n\n', i.length && Object.keys(i).forEach(function(e) {
                        var t = i[e];
                        a += '<div class="form-group mt-20 d-flex align-items-center justify-content-between">\n<label class="" for="filterOption' + t.id + '">' + t.title + '</label>\n<div class="custom-control custom-checkbox">\n<input type="checkbox" name="filters[]" value="' + t.id + '" class="custom-control-input" id="filterOption' + t.id + '">\n<label class="custom-control-label" for="filterOption' + t.id + '"></label>\n</div>\n</div>\n'
                    }), a += "</div></div>"
                }), e("#categoriesFiltersContainer").removeClass("d-none"), e("#categoriesFiltersCard").html(a)
            } else e("#categoriesFiltersContainer").addClass("d-none"), e("#categoriesFiltersCard").html("")
        })
    }), e("body").on("click", "#webinarAddTicket", function(t) {
        t.preventDefault();
        var a = '<div id="addTicketModal">';
        a += e("#webinarTicketModal").html(), a += "</div>", Swal.fire({
            html: a,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "48rem"
        }), resetDatePickers()
    }), e("body").on("click", "#saveTicket", function(t) {
        t.preventDefault();
        var a = e(this),
            n = e("#addTicketModal .js-form");
        handleWebinarItemForm(n, a)
    }), e(document).ready(function() {
        var t = getComputedStyle(document.body).getPropertyValue("--primary");

        function n(a) {
            a.length && a.sortable({
                group: "no-drop",
                handle: ".move-icon",
                axis: "y",
                update: function(n, i) {
                    var r = a.sortable("toArray", {
                        attribute: "data-id"
                    });
                    ! function(a, n) {
                        e.post("/admin/webinars/order-items", {
                            table: a,
                            items: n
                        }, function(a) {
                            a && a.title && a.msg && e.toast({
                                heading: a.title,
                                text: a.msg,
                                bgColor: t,
                                textColor: "white",
                                hideAfter: 1e4,
                                position: "bottom-right",
                                icon: "success"
                            })
                        })
                    }(n.target.getAttribute("data-order-table"), r.join(","))
                }
            })
        }
        var i = [],
            r = e(".draggable-content-lists");
        if (r.length) {
            var o, s = _createForOfIteratorHelper(r);
            try {
                for (s.s(); !(o = s.n()).done;) {
                    var l = o.value;
                    i.push(e(l).attr("data-drag-class"))
                }
            } catch (e) {
                s.e(e)
            } finally {
                s.f()
            }
        }
        if (i.length) {
            var d, c = _createForOfIteratorHelper(i);
            try {
                for (c.s(); !(d = c.n()).done;) {
                    var p = d.value,
                        u = e("." + p);
                    u.length && n(u)
                }
            } catch (e) {
                c.e(e)
            } finally {
                c.f()
            }
        }
        var f = e(".file-form");
        f && f.length && f.each(function(t) {
            if (f[t]) {
                var n = e(f[t]),
                    i = n.find(".js-file-storage").val(),
                    r = n.find(".js-ajax-file_type").val();
                a(n, i, r)
            }
        }), e(".accordion-content-wrapper .attachments-select2").length && e(".accordion-content-wrapper .attachments-select2").select2({
            multiple: !0,
            width: "100%"
        });
        var m = e(".accordion-content-wrapper .js-content-summernote");
        m.length && m.summernote({
            tabsize: 2,
            height: 400,
            dialogsInBody: !0,
            callbacks: {
                onChange: function(t, a) {
                    e(".js-hidden-content-summernote").val(t)
                }
            }
        })
    }), e("body").on("change", ".js-webinar-content-locale", function(t) {
        t.preventDefault();
        var a = e(this),
            n = e(this).closest(".js-content-form"),
            i = a.val(),
            r = a.attr("data-webinar-id"),
            o = a.attr("data-id"),
            s = a.attr("data-relation"),
            l = a.attr("data-fields");
        l = l.split(","), a.addClass("loadingbar gray");
        var d = "/admin/webinars/" + r + "/getContentItemByLocale",
            c = {
                item_id: o,
                locale: i,
                relation: s
            };
        e.post(d, c, function(t) {
            if (t && t.item) {
                var i = t.item;
                Object.keys(i).forEach(function(t) {
                    var a = i[t]; - 1 !== e.inArray(t, l) && n.find(".js-ajax-" + t).val(a);
                    if ("textLessons" === s && "content" === t) {
                        var r = n.find(".js-content-" + o);
                        r.length && (r.summernote("destroy"), r.val(a), e(".js-hidden-content-" + o).val(a), r.summernote({
                            tabsize: 2,
                            height: 400,
                            dialogsInBody: !0,
                            callbacks: {
                                onChange: function(t, a) {
                                    e(".js-hidden-content-" + o).val(t)
                                }
                            }
                        }))
                    }
                }), a.removeClass("loadingbar gray")
            }
        }).fail(function(e) {
            a.removeClass("loadingbar gray")
        })
    }), window.handleWebinarItemForm = function(t, a) {
        var n = serializeObjectByTag(t),
            i = t.attr("data-action");
        a.addClass("loadingbar primary").prop("disabled", !0), t.find("input").removeClass("is-invalid"), t.find("textarea").removeClass("is-invalid"), e.post(i, n, function(e) {
            e && 200 === e.code && (Swal.fire({
                icon: "success",
                html: '<h3 class="font-20 text-center text-dark-blue py-25">' + saveSuccessLang + "</h3>",
                showConfirmButton: !1,
                width: "25rem"
            }), setTimeout(function() {
                window.location.reload()
            }, 500))
        }).fail(function(e) {
            a.removeClass("loadingbar primary").prop("disabled", !1);
            var n = e.responseJSON;
            n && "zoom_jwt_token_invalid" === n.status && Swal.fire({
                icon: "error",
                html: '<h3 class="font-20 text-center text-dark-blue py-25">' + zoomJwtTokenInvalid + "</h3>",
                showConfirmButton: !1,
                width: "25rem"
            }), n && n.errors && Object.keys(n.errors).forEach(function(e) {
                var a = n.errors[e],
                    i = t.find(".js-ajax-" + e);
                "zoom-not-complete-alert" === e ? t.find(".js-zoom-not-complete-alert").removeClass("d-none") : (i.addClass("is-invalid"), i.parent().find(".invalid-feedback").text(a[0]))
            })
        })
    }, e("body").on("click", ".save-chapter", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.closest(".chapter-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", ".js-add-chapter", function(a) {
        var n = e(this),
            i = n.attr("data-webinar-id"),
            r = n.attr("data-type"),
            o = n.attr("data-chapter"),
            s = n.attr("data-locale"),
            l = o || t(),
            d = e("#chapterModalHtml").clone();
        d.removeClass("d-none");
        var c = d.prop("innerHTML");
        c = c.replaceAll("record", l), d.html('<div id="chapterModal' + l + '">' + c + "</div>"), Swal.fire({
            html: d,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "36rem",
            onOpen: function() {
                var t = e("#chapterModal" + l);
                if (t.find("input.js-chapter-webinar-id").val(i), t.find("input.js-chapter-type").val(r), o) {
                    t.find(".section-title").text(editChapterLang);
                    var a = "/admin/chapters/" + o + "/update";
                    t.find(".chapter-form").attr("data-action", a), e.get("/admin/chapters/" + o + "?locale=" + s, function(e) {
                        if (e && e.chapter) {
                            t.find(".js-ajax-title").val(e.chapter.title);
                            var a = t.find(".js-chapter-status-switch");
                            "active" === e.chapter.status ? a.prop("checked", !0) : a.prop("checked", !1);
                            var n = e.chapter.check_all_contents_pass && "0" !== e.chapter.check_all_contents_pass;
                            t.find(".js-chapter-check-all-contents-pass").prop("checked", n);
                            var i = t.find(".js-chapter-locale");
                            i.val(s), i.addClass("js-webinar-content-locale"), i.attr("data-id", o)
                        }
                    })
                }
            }
        })
    }), e("body").on("click", ".js-add-course-content-btn, .add-new-interactive-file-btn", function(a) {
        a.preventDefault();
        var n = e(this),
            i = n.attr("data-type"),
            r = n.attr("data-chapter"),
            o = "#chapterContentAccordion" + r,
            s = t(),
            l = "";
        switch (i) {
            case "file":
                var d = e("#newFileForm");
                d.find(".chapter-input").val(r), l = (l = d.html()).replace(/record/g, s), e(o).prepend(l);
                break;
            case "new_interactive_file":
                var c = e("#newInteractiveFileForm");
                c.find(".chapter-input").val(r), l = (l = c.html()).replace(/record/g, s), e(o).prepend(l);
                break;
            case "session":
                var p = e("#newSessionForm");
                p.find(".chapter-input").val(r), l = (l = p.html()).replace(/record/g, s), e(o).prepend(l);
                break;
            case "text_lesson":
                var u = e("#newTextLessonForm");
                u.find(".chapter-input").val(r), l = (l = (l = (l = (l = u.html()).replace(/record/g, s)).replaceAll("attachments-select2", "attachments-select2-" + s)).replaceAll("js-content-summernote", "js-content-summernote-" + s)).replaceAll("js-hidden-content-summernote", "js-hidden-content-summernote-" + s), e(o).prepend(l), e(".attachments-select2-" + s).select2({
                    multiple: !0,
                    width: "100%"
                }), e(".js-content-summernote-" + s).summernote({
                    tabsize: 2,
                    height: 400,
                    dialogsInBody: !0,
                    callbacks: {
                        onChange: function(t, a) {
                            e(".js-hidden-content-summernote-" + s).val(t)
                        }
                    }
                });
                break;
            case "assignment":
                var f = e("#newAssignmentForm");
                f.find(".chapter-input").val(r), l = (l = f.html()).replace(/record/g, s), e(o).prepend(l);
                break;
            case "quiz":
                var m = e("#newQuizForm");
                m.find(".chapter-input").val(r), l = (l = m.html()).replace(/record/g, s), e(o).prepend(l)
        }
        resetDatePickers(), feather.replace()
    }), e("body").on("click", ".js-change-content-chapter", function(a) {
        a.preventDefault();
        var n = e(this),
            i = n.attr("data-item-id"),
            r = n.attr("data-item-type"),
            o = n.attr("data-chapter-id"),
            s = t(),
            l = e("#changeChapterModalHtml").clone();
        l.removeClass("d-none");
        var d = l.prop("innerHTML");
        l.html('<div id="changeChapterModalHtml' + s + '">' + d + "</div>"), Swal.fire({
            html: l,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "36rem",
            onOpen: function() {
                var t = e("#changeChapterModalHtml" + s);
                t.find("input.js-item-id").val(i), t.find("input.js-item-type").val(r), t.find(".js-ajax-chapter_id").val(o).change()
            }
        })
    }), e("body").on("click", ".save-change-chapter", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.closest(".change-chapter-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", ".js-save-file", function(t) {
        t.preventDefault();
        var a = e(this);
        ! function(t, a) {
            serializeObjectByTag(t);
            var n = t.attr("data-action");
            a.addClass("loadingbar primary").prop("disabled", !0), t.find("input").removeClass("is-invalid"), t.find("textarea").removeClass("is-invalid");
            var i = new FormData,
                r = t.find(".js-s3-file-input");
            r && r.prop("files") && r.prop("files")[0] && i.append("s3_file", r.prop("files")[0]);
            var o = t.find("input, textarea, select").serializeArray();
            e.each(o, function() {
                i.append(this.name, this.value)
            }), e.ajax({
                url: n,
                type: "POST",
                data: i,
                processData: !1,
                contentType: !1,
                cache: !1,
                success: function(e) {
                    e && 200 === e.code && (Swal.fire({
                        icon: "success",
                        html: '<h3 class="font-20 text-center text-dark-blue py-25">' + saveSuccessLang + "</h3>",
                        showConfirmButton: !1,
                        width: "25rem"
                    }), setTimeout(function() {
                        window.location.reload()
                    }, 500))
                },
                error: function(e) {
                    a.removeClass("loadingbar primary").prop("disabled", !1);
                    var n = e.responseJSON;
                    n && n.errors && Object.keys(n.errors).forEach(function(e) {
                        var a = n.errors[e],
                            i = t.find(".js-ajax-" + e);
                        i.addClass("is-invalid"), i.parent().find(".invalid-feedback").text(a[0])
                    })
                }
            })
        }(a.closest(".file-form"), a)
    }), e("body").on("change", ".js-file-storage", function(t) {
        t.preventDefault();
        var n = this.value,
            i = e(this).closest("form"),
            r = i.find(".js-ajax-file_type").val();
        a(i, n, r)
    }), e("body").on("change", ".js-ajax-file_type", function(t) {
        t.preventDefault();
        var n = e(this).val(),
            i = e(this).closest("form"),
            r = i.find(".js-file-storage").val();
        a(i, r, n)
    }), e("body").on("change", ".js-api-input", function(t) {
        t.preventDefault();
        var a = e(this).closest(".session-form"),
            n = this.value;
        a.find(".js-zoom-not-complete-alert").addClass("d-none"), a.find(".js-agora-chat-and-rec").addClass("d-none"), "big_blue_button" === n ? (a.find(".js-local-link").addClass("d-none"), a.find(".js-api-secret").removeClass("d-none"), a.find(".js-moderator-secret").removeClass("d-none")) : "zoom" === n ? (a.find(".js-local-link").addClass("d-none"), a.find(".js-api-secret").addClass("d-none"), a.find(".js-moderator-secret").addClass("d-none"), hasZoomApiToken && "true" !== hasZoomApiToken && a.find(".js-zoom-not-complete-alert").removeClass("d-none")) : "agora" === n ? (a.find(".js-agora-chat-and-rec").removeClass("d-none"), a.find(".js-api-secret").addClass("d-none"), a.find(".js-local-link").addClass("d-none"), a.find(".js-moderator-secret").addClass("d-none")) : (a.find(".js-local-link").removeClass("d-none"), a.find(".js-api-secret").removeClass("d-none"), a.find(".js-moderator-secret").addClass("d-none"))
    }), e("body").on("click", ".js-save-session", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.closest(".session-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", ".js-session-has-ended", function() {
        e.toast({
            heading: requestFailedLang,
            text: thisLiveHasEndedLang,
            bgColor: "#f63c3c",
            textColor: "white",
            hideAfter: 1e4,
            position: "bottom-right",
            icon: "error"
        })
    }), e("body").on("click", ".js-save-text_lesson", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.closest(".text_lesson-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", ".js-save-assignment", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.closest(".assignment-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", ".assignment-attachments-add-btn", function(a) {
        var n = e(this).closest(".js-assignment-attachments-items"),
            i = n.find(".assignment-attachments-main-row").clone();
        i.removeClass("assignment-attachments-main-row"), i.removeClass("d-none");
        var r = i.find(".assignment-attachments-remove-btn");
        r && r.removeClass("d-none");
        var o = i.prop("innerHTML");
        o = (o = (o = o.replaceAll("assignmentTemp", t())).replaceAll("btn-primary", "btn-danger")).replaceAll("assignment-attachments-add-btn", "assignment-attachments-remove-btn"), i.html(o), n.append(i)
    }), e("body").on("click", ".assignment-attachments-remove-btn", function(t) {
        t.preventDefault(), e(this).closest(".js-ajax-attachments").remove()
    }), e("body").on("click", ".cancel-accordion", function(t) {
        t.preventDefault(), e(this).closest(".accordion-row").remove()
    }), e("body").on("click", "#webinarAddPrerequisites", function(t) {
        var a = this;
        t.preventDefault();
        var n = '<div id="addPrerequisitesModal">';
        n += e("#webinarPrerequisitesModal").html(), n = (n = (n += "</div>").replaceAll("prerequisites-select", "prerequisites-select2")).replaceAll("str_", ""), Swal.fire({
            html: n,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "48rem",
            onOpen: function() {
                e(".prerequisites-select2").select2({
                    placeholder: e(a).data("placeholder"),
                    minimumInputLength: 3,
                    allowClear: !0,
                    ajax: {
                        url: "/admin/webinars/search",
                        dataType: "json",
                        type: "POST",
                        quietMillis: 50,
                        data: function(t) {
                            return {
                                term: t.term,
                                webinar_id: e(this).data("webinar-id")
                            }
                        },
                        processResults: function(t) {
                            return {
                                results: e.map(t, function(e) {
                                    return {
                                        text: e.title,
                                        id: e.id
                                    }
                                })
                            }
                        }
                    }
                })
            }
        })
    }), e("body").on("click", "#savePrerequisites", function(t) {
        t.preventDefault();
        var a = e(this),
            n = e("#addPrerequisitesModal .js-prerequisites-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", "#webinarAddFAQ", function(t) {
        t.preventDefault();
        var a = '<div id="addFAQsModal">';
        a += e("#webinarFaqModal").html(), a += "</div>", Swal.fire({
            html: a,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "48rem"
        })
    }), e("body").on("click", "#saveFAQ", function(t) {
        t.preventDefault();
        var a = e(this),
            n = e("#addFAQsModal .js-faq-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", "#add_new_learning_materials", function(a) {
        a.preventDefault();
        t();
        var n = '<div id="extraDescriptionModal">';
        n += e("#extraDescriptionForm").html(), n += "</div>", Swal.fire({
            html: n,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "48rem",
            onOpen: function() {
                e('#extraDescriptionModal input[name="type"]').val("learning_materials")
            }
        })
    }), e("body").on("click", "#add_new_company_logos", function(a) {
        a.preventDefault();
        var i = n(t());
        Swal.fire({
            html: i,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "48rem",
            onOpen: function() {
                e('#extraDescriptionModal input[name="type"]').val("company_logos")
            }
        })
    }), e("body").on("click", "#add_new_requirements", function(a) {
        a.preventDefault();
        t();
        var n = '<div id="extraDescriptionModal">';
        n += e("#extraDescriptionForm").html(), n += "</div>", Swal.fire({
            html: n,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "48rem",
            onOpen: function() {
                e('#extraDescriptionModal input[name="type"]').val("requirements")
            }
        })
    }), e("body").on("click", "#saveExtraDescription", function(t) {
        t.preventDefault();
        var a = e(this),
            n = e("#extraDescriptionModal .js-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", ".edit-extraDescription", function(t) {
        t.preventDefault(), i(e(this))
    }), e("body").on("change", ".js-edit-extraDescription-locale-ajax", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.val();
        i(a, n)
    }), e("body").on("click", "#webinarAddQuiz", function(t) {
        var a = this;
        t.preventDefault();
        var n = '<div id="addQuizModal">';
        n += e("#quizzesModal").html(), n = (n += "</div>").replaceAll("quiz-select2", "quiz-select22"), Swal.fire({
            html: n,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "30rem",
            onOpen: function() {
                e(".quiz-select22").select2({
                    placeholder: e(a).data("placeholder"),
                    allowClear: !0,
                    width: "100%"
                })
            }
        })
    }), e("body").on("click", "#saveQuiz", function(t) {
        t.preventDefault();
        var a = e(this),
            n = e("#addQuizModal .js-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", ".edit-ticket", function(t) {
        t.preventDefault();
        var a = e(this);
        loadingSwl(), r(a)
    }), e("body").on("change", ".js-edit-ticket-locale-ajax", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.val();
        r(a, n)
    }), e("body").on("click", ".edit-chapter", function(t) {
        t.preventDefault();
        var a = e(this);
        loadingSwl(), o(a)
    }), e("body").on("change", ".js-edit-chapter-locale-ajax", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.val();
        o(a, n)
    }), e("body").on("click", ".edit-session", function(t) {
        t.preventDefault();
        var a = e(this);
        loadingSwl(), s(a)
    }), e("body").on("change", ".js-edit-session-locale-ajax", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.val();
        s(a, n)
    }), e("body").on("change", ".js-video-demo-source", function(t) {
        t.preventDefault();
        var a = e(this).val(),
            n = e(".js-video-demo-path-input .js-video-demo-path-upload"),
            i = e(".js-video-demo-path-input .js-video-demo-path-links"),
            r = e(".js-video-demo-path-input input");
        n.addClass("d-none"), i.addClass("d-none"), "upload" === a ? n.removeClass("d-none") : i.removeClass("d-none"), videoDemoPathPlaceHolderBySource && r.attr("placeholder", videoDemoPathPlaceHolderBySource[a])
    }), e("body").on("click", ".edit-prerequisite", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.attr("data-prerequisite-id"),
            i = a.attr("data-webinar-id");
        loadingSwl();
        var r = {
            item_id: i
        };
        e.post("/admin/prerequisites/" + n + "/edit", r, function(t) {
            var a = this;
            if (t && t.prerequisite) {
                var i = t.prerequisite,
                    r = '<div id="addPrerequisitesModal">';
                r += e("#webinarPrerequisitesModal").html(), r = (r = (r = (r += "</div>").replaceAll("prerequisites-select", "prerequisites-select2")).replaceAll("/admin/prerequisites/store", "/admin/prerequisites/" + n + "/update")).replaceAll("str_", ""), Swal.fire({
                    html: r,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "48rem",
                    onOpen: function() {
                        e(".prerequisites-select2").append('<option selected="selected" value="' + i.webinar_id + '">' + i.webinar_title + "</option>"), 1 === i.required && e("#addPrerequisitesModal").find('[name="required"]').prop("checked", !0), e(".prerequisites-select2").select2({
                            placeholder: e(a).data("placeholder"),
                            minimumInputLength: 3,
                            allowClear: !0,
                            ajax: {
                                url: "/admin/webinars/search",
                                dataType: "json",
                                type: "POST",
                                quietMillis: 50,
                                data: function(t) {
                                    return {
                                        term: t.term,
                                        webinar_id: e(this).data("webinar-id")
                                    }
                                },
                                processResults: function(t) {
                                    return {
                                        results: e.map(t, function(e) {
                                            return {
                                                text: e.title,
                                                id: e.id
                                            }
                                        })
                                    }
                                }
                            }
                        })
                    }
                })
            }
        })
    }), e("body").on("click", ".edit-faq", function(t) {
        t.preventDefault();
        var a = e(this);
        loadingSwl(), l(a)
    }), e("body").on("change", ".js-edit-faq-locale-ajax", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.val();
        l(a, n)
    }), e("body").on("click", ".js-get-faq-description", function(t) {
        t.preventDefault();
        var a = '<div class="my-2">' + e(this).parent().find("input").val() + "</div>";
        Swal.fire({
            html: a,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "30rem"
        })
    }), e("body").on("click", ".edit-webinar-quiz", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.attr("data-webinar-quiz-id"),
            i = a.attr("data-webinar-id");
        loadingSwl();
        var r = {
            item_id: i
        };
        e.post("/admin/webinar-quiz/" + n + "/edit", r, function(t) {
            var a = this;
            if (t && t.webinarQuiz) {
                var i = t.webinarQuiz,
                    r = '<div id="addQuizModal">';
                r += e("#quizzesModal").html(), r = (r = (r += "</div>").replaceAll("/admin/webinar-quiz/store", "/admin/webinar-quiz/" + n + "/update")).replaceAll("quiz-select2", "quiz-select22"), Swal.fire({
                    html: r,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "30rem",
                    onOpen: function() {
                        e(".quiz-select22").append('<option selected="selected" value="' + i.id + '">' + i.title + "</option>"), e(".quiz-select22").select2({
                            placeholder: e(a).data("placeholder"),
                            allowClear: !0,
                            width: "100%"
                        }), e("#addQuizModal").find('[name="chapter_id"]').val(i.chapter_id)
                    }
                })
            }
        })
    }), e("body").on("change", 'select[name="type"]', function() {
        var t = !0;
        "webinar" !== this.value && (t = !1);
        for (var a = 0, n = ["capacity", "start_date"]; a < n.length; a++) {
            var i = n[a];
            t ? e(".js-" + i).removeClass("d-none") : e(".js-" + i).addClass("d-none")
        }
    }), e("body").on("change", ".js-sequence-content-switch", function() {
        var t = e(this).closest("form").find(".js-sequence-content-inputs");
        t.addClass("d-none"), this.checked && t.removeClass("d-none")
    }), e("body").on("click", "#bundleAddNewCourses", function(t) {
        t.preventDefault();
        var a = '<div id="addBundleWebinarModal">';
        a += e("#bundleWebinarsModal").html(), a = (a = (a += "</div>").replaceAll("bundleWebinars-select", "bundleWebinars-select2")).replaceAll("str_", ""), Swal.fire({
            html: a,
            showCancelButton: !1,
            showConfirmButton: !1,
            customClass: {
                content: "p-0 text-left"
            },
            width: "48rem",
            onOpen: function() {
                e(".bundleWebinars-select2").select2({
                    allowClear: !1
                })
            }
        })
    }), e("body").on("click", "#saveBundleWebinar", function(t) {
        t.preventDefault();
        var a = e(this),
            n = e("#addBundleWebinarModal .js-form");
        handleWebinarItemForm(n, a)
    }), e("body").on("click", ".edit-bundle-webinar", function(t) {
        t.preventDefault();
        var a = e(this),
            n = a.attr("data-item-id"),
            i = a.attr("data-bundle-id");
        loadingSwl();
        var r = {
            item_id: i
        };
        e.post("/admin/bundle-webinars/" + n + "/edit", r, function(t) {
            if (t && t.bundleWebinar) {
                var a = t.bundleWebinar,
                    i = '<div id="addBundleWebinarModal">';
                i += e("#bundleWebinarsModal").html(), i = (i = (i = (i += "</div>").replaceAll("bundleWebinars-select", "bundleWebinars-select2")).replaceAll("/admin/bundle-webinars/store", "/admin/bundle-webinars/" + n + "/update")).replaceAll("str_", ""), Swal.fire({
                    html: i,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "48rem",
                    onOpen: function() {
                        var t = e(".bundleWebinars-select2");
                        t.val(a.webinar_id), t.select2({
                            allowClear: !1
                        })
                    }
                })
            }
        })
    }), feather.replace()
}(jQuery);
