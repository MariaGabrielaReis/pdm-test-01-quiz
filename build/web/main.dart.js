// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const binding = flutter_sdk.src__widgets__binding;
  const colors$ = flutter_sdk.src__painting__colors;
  const form = flutter_sdk.src__widgets__form;
  const scaffold = flutter_sdk.src__material__scaffold;
  const snack_bar = flutter_sdk.src__material__snack_bar;
  const dismissible = flutter_sdk.src__widgets__dismissible;
  const text = flutter_sdk.src__widgets__text;
  const media_query = flutter_sdk.src__widgets__media_query;
  const app_bar = flutter_sdk.src__material__app_bar;
  const single_child_scroll_view = flutter_sdk.src__widgets__single_child_scroll_view;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const scroll_physics = flutter_sdk.src__widgets__scroll_physics;
  const divider = flutter_sdk.src__material__divider;
  const text_style = flutter_sdk.src__painting__text_style;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const radio_list_tile = flutter_sdk.src__material__radio_list_tile;
  const list_tile = flutter_sdk.src__material__list_tile;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var form$ = Object.create(dart.library);
  var radio_button = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    JSArrayOfQuestion: () => (T.JSArrayOfQuestion = dart.constFn(_interceptors.JSArray$(form$.Question)))(),
    SetOfvoid: () => (T.SetOfvoid = dart.constFn(core.Set$(dart.void)))(),
    LinkedHashSetOfSetOfvoid: () => (T.LinkedHashSetOfSetOfvoid = dart.constFn(collection.LinkedHashSet$(T.SetOfvoid())))(),
    LinkedHashSetOfvoid: () => (T.LinkedHashSetOfvoid = dart.constFn(collection.LinkedHashSet$(dart.void)))(),
    QuestionTovoid: () => (T.QuestionTovoid = dart.constFn(dart.fnType(dart.void, [form$.Question])))(),
    BuildContextAndintToPadding: () => (T.BuildContextAndintToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.BuildContext, core.int])))(),
    BuildContextAndintToRadioButton: () => (T.BuildContextAndintToRadioButton = dart.constFn(dart.fnType(radio_button.RadioButton, [framework.BuildContext, core.int])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextAndintToColumn: () => (T.BuildContextAndintToColumn = dart.constFn(dart.fnType(basic.Column, [framework.BuildContext, core.int])))(),
    RadioListTileOfString: () => (T.RadioListTileOfString = dart.constFn(radio_list_tile.RadioListTile$(core.String)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNTovoid: () => (T.StringNTovoid = dart.constFn(dart.fnType(dart.void, [T.StringN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294309365
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293848814
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292927712
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292269782
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290624957
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288585374
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284572001
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282532418
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281348144
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280361249
      });
    },
    get C3() {
      return C[3] = dart.constMap(core.int, ui.Color, [50, C[4] || CT.C4, 100, C[5] || CT.C5, 200, C[6] || CT.C6, 300, C[7] || CT.C7, 350, C[8] || CT.C8, 400, C[9] || CT.C9, 500, C[10] || CT.C10, 600, C[11] || CT.C11, 700, C[12] || CT.C12, 800, C[13] || CT.C13, 850, C[14] || CT.C14, 900, C[15] || CT.C15]);
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4288585374,
        [ColorSwatch__swatch]: C[3] || CT.C3
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 5
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Responda todas as questões!"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_clipBehavior]: C[17] || CT.C17,
        [SnackBar_dismissDirection]: C[18] || CT.C18,
        [SnackBar_onVisible]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C[19] || CT.C19,
        [SnackBar_closeIconColor]: null,
        [SnackBar_showCloseIcon]: null,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_width]: null,
        [SnackBar_padding]: null,
        [SnackBar_margin]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C[20] || CT.C20
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Quiz sobre economia"
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 0
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: divider.Divider.prototype,
        [Widget_key]: null,
        [Divider_color]: null,
        [Divider_endIndent]: null,
        [Divider_indent]: null,
        [Divider_thickness]: null,
        [Divider_height]: null
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 8,
        [SizedBox_width]: null
      });
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Enviar"
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 24
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[2] || CT.C2,
        [TextStyle_inherit]: true
      });
    }
  }, false);
  var C = Array(29).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "package:flutter_app/screens/form.dart",
    "package:flutter_app/ui/radio_button.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({title: "Formulário", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.teal}), home: new form$.FormPage.new()});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.main = function main$0() {
    return binding.runApp(C[1] || CT.C1);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var label$ = dart.privateName(form$, "Question.label");
  var alternatives$ = dart.privateName(form$, "Question.alternatives");
  var answer$ = dart.privateName(form$, "Question.answer");
  var group$ = dart.privateName(form$, "Question.group");
  var color$ = dart.privateName(form$, "Question.color");
  var Color_value = dart.privateName(ui, "Color.value");
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  form$.Question = class Question extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get alternatives() {
      return this[alternatives$];
    }
    set alternatives(value) {
      super.alternatives = value;
    }
    get answer() {
      return this[answer$];
    }
    set answer(value) {
      super.answer = value;
    }
    get group() {
      return this[group$];
    }
    set group(value) {
      this[group$] = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      this[color$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let label = opts && 'label' in opts ? opts.label : null;
      let group = opts && 'group' in opts ? opts.group : null;
      let alternatives = opts && 'alternatives' in opts ? opts.alternatives : null;
      let answer = opts && 'answer' in opts ? opts.answer : null;
      let color = opts && 'color' in opts ? opts.color : C[2] || CT.C2;
      return new form$.Question.new({label: label, group: group, alternatives: alternatives, answer: answer, color: color});
    }
  };
  (form$.Question.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let group = opts && 'group' in opts ? opts.group : null;
    let alternatives = opts && 'alternatives' in opts ? opts.alternatives : null;
    let answer = opts && 'answer' in opts ? opts.answer : null;
    let color = opts && 'color' in opts ? opts.color : C[2] || CT.C2;
    this[label$] = label;
    this[group$] = group;
    this[alternatives$] = alternatives;
    this[answer$] = answer;
    this[color$] = color;
    ;
  }).prototype = form$.Question.prototype;
  dart.addTypeTests(form$.Question);
  dart.addTypeCaches(form$.Question);
  dart.setLibraryUri(form$.Question, I[1]);
  dart.setFieldSignature(form$.Question, () => ({
    __proto__: dart.getFields(form$.Question.__proto__),
    label: dart.finalFieldType(core.String),
    alternatives: dart.finalFieldType(core.List$(core.String)),
    answer: dart.finalFieldType(core.String),
    group: dart.fieldType(core.String),
    color: dart.fieldType(ui.Color)
  }));
  form$.FormPage = class FormPage extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new form$.FormPage.new({key: key});
    }
    createState() {
      return new form$._FormPageState.new();
    }
  };
  (form$.FormPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    form$.FormPage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = form$.FormPage.prototype;
  dart.addTypeTests(form$.FormPage);
  dart.addTypeCaches(form$.FormPage);
  dart.setMethodSignature(form$.FormPage, () => ({
    __proto__: dart.getMethods(form$.FormPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(form$.FormPage, I[1]);
  var _formKey = dart.privateName(form$, "_formKey");
  var _select = dart.privateName(form$, "_select");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var SnackBar_clipBehavior = dart.privateName(snack_bar, "SnackBar.clipBehavior");
  var SnackBar_dismissDirection = dart.privateName(snack_bar, "SnackBar.dismissDirection");
  var SnackBar_onVisible = dart.privateName(snack_bar, "SnackBar.onVisible");
  var SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var SnackBar_duration = dart.privateName(snack_bar, "SnackBar.duration");
  var SnackBar_closeIconColor = dart.privateName(snack_bar, "SnackBar.closeIconColor");
  var SnackBar_showCloseIcon = dart.privateName(snack_bar, "SnackBar.showCloseIcon");
  var SnackBar_action = dart.privateName(snack_bar, "SnackBar.action");
  var SnackBar_behavior = dart.privateName(snack_bar, "SnackBar.behavior");
  var SnackBar_shape = dart.privateName(snack_bar, "SnackBar.shape");
  var SnackBar_width = dart.privateName(snack_bar, "SnackBar.width");
  var SnackBar_padding = dart.privateName(snack_bar, "SnackBar.padding");
  var SnackBar_margin = dart.privateName(snack_bar, "SnackBar.margin");
  var SnackBar_elevation = dart.privateName(snack_bar, "SnackBar.elevation");
  var SnackBar_backgroundColor = dart.privateName(snack_bar, "SnackBar.backgroundColor");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  var _send = dart.privateName(form$, "_send");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Divider_color = dart.privateName(divider, "Divider.color");
  var Divider_endIndent = dart.privateName(divider, "Divider.endIndent");
  var Divider_indent = dart.privateName(divider, "Divider.indent");
  var Divider_thickness = dart.privateName(divider, "Divider.thickness");
  var Divider_height = dart.privateName(divider, "Divider.height");
  form$._FormPageState = class _FormPageState extends framework.State$(form$.FormPage) {
    [_select](alternative, index) {
      this.setState(dart.fn(() => {
        this.questions[$_get](index).group = alternative;
      }, T.VoidTovoid()));
    }
    [_send]() {
      let isIncomplete = false;
      for (let i = 0; i < this.questions[$length]; i = i + 1) {
        if (this.questions[$_get](i).group.length < 1) {
          isIncomplete = true;
          scaffold.ScaffoldMessenger.of(this.context).showSnackBar(C[16] || CT.C16);
          break;
        }
      }
      if (!isIncomplete) {
        this.questions[$forEach](dart.fn(question => (() => {
          let t0 = T.LinkedHashSetOfSetOfvoid().new();
          if (question.group === question.answer)
            t0.add(T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                question.color = colors.Colors.green;
              }, T.VoidTovoid()))]));
          else
            t0.add(T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                question.color = colors.Colors.red;
              }, T.VoidTovoid()))]));
          return t0;
        })(), T.QuestionTovoid()));
      }
    }
    build(context) {
      let fivePercentOfScreen = media_query.MediaQuery.of(context).size.width / 100 * 5;
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[21] || CT.C21}), body: new single_child_scroll_view.SingleChildScrollView.new({padding: new edge_insets.EdgeInsets.only({bottom: fivePercentOfScreen, right: fivePercentOfScreen > 64 ? fivePercentOfScreen * 1.5 : fivePercentOfScreen, left: fivePercentOfScreen > 64 ? fivePercentOfScreen * 1.5 : fivePercentOfScreen}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([C[22] || CT.C22, new form.Form.new({key: this[_formKey], child: new scroll_view.ListView.separated({shrinkWrap: true, physics: new scroll_physics.ClampingScrollPhysics.new(), itemCount: this.questions[$length], separatorBuilder: dart.fn((_, index) => new basic.Padding.new({padding: C[23] || CT.C23, child: C[24] || CT.C24}), T.BuildContextAndintToPadding()), itemBuilder: dart.fn((_, index) => {
                    let question = this.questions[$_get](index);
                    return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(question.label, {style: new text_style.TextStyle.new({fontSize: 16, color: this.questions[$_get](index).color._equals(colors.Colors.grey) ? colors.Colors.grey.shade800 : this.questions[$_get](index).color})}), C[25] || CT.C25, new scroll_view.ListView.builder({shrinkWrap: true, physics: new scroll_physics.ClampingScrollPhysics.new(), itemCount: question.alternatives[$length], itemBuilder: dart.fn((_, alternativeIndex) => {
                            let alternative = this.questions[$_get](index).alternatives[$_get](alternativeIndex);
                            return new radio_button.RadioButton.new({label: alternative, isChecked: this.questions[$_get](index).group === alternative, group: this.questions[$_get](index).group, onPress: dart.fn(() => this[_select](alternative, index), T.VoidTovoid()), color: this.questions[$_get](index).color});
                          }, T.BuildContextAndintToRadioButton())})])});
                  }, T.BuildContextAndintToColumn())})}), C[22] || CT.C22, C[24] || CT.C24, C[22] || CT.C22, new basic.SizedBox.new({height: 32, width: media_query.MediaQuery.of(context).size.width, child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => this[_send](), T.VoidTovoid()), child: C[26] || CT.C26})})])})})});
    }
    static ['_#new#tearOff']() {
      return new form$._FormPageState.new();
    }
  };
  (form$._FormPageState.new = function() {
    this[_formKey] = T.GlobalKeyOfFormState().new();
    this.questions = T.JSArrayOfQuestion().of([new form$.Question.new({label: "Qual a Taxa Selic do Brasil atualmente?", group: "", alternatives: T.JSArrayOfString().of(["-20,25% a.a", "122,15% a.a", "13,75% a.a", "3% a.a"]), answer: "13,75% a.a"}), new form$.Question.new({label: "Quem decide aumentar ou diminuir a Taxa Selic?", group: "", alternatives: T.JSArrayOfString().of(["O presidente", "Banco Central", "Governos Estaduais", "Xuxa"]), answer: "Banco Central"}), new form$.Question.new({label: "Qual desses ativos não é considerado de \"Renda Variável\"?", group: "", alternatives: T.JSArrayOfString().of(["CDB 100% do CDI", "Criptomoedas", "Fundos Imobiliários", "Ações"]), answer: "CDB 100% do CDI"}), new form$.Question.new({label: "Se existe uma carteira que só contém ativos de Renda Fixa e dinheiro em caixa, qual o perfil desta carteira?", group: "", alternatives: T.JSArrayOfString().of(["Medroso", "Moderado", "Arrojado", "Ultra-conservador"]), answer: "Ultra-conservador"}), new form$.Question.new({label: "Qual dos produtos abaixo tem como princípio superar a inflação?", group: "", alternatives: T.JSArrayOfString().of(["Agiotagem", "CDB IPCA + 6%", "REITs e Stocks", "Consórcio"]), answer: "CDB IPCA + 6%"})]);
    form$._FormPageState.__proto__.new.call(this);
    ;
  }).prototype = form$._FormPageState.prototype;
  dart.addTypeTests(form$._FormPageState);
  dart.addTypeCaches(form$._FormPageState);
  dart.setMethodSignature(form$._FormPageState, () => ({
    __proto__: dart.getMethods(form$._FormPageState.__proto__),
    [_select]: dart.fnType(dart.void, [core.String, core.int]),
    [_send]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(form$._FormPageState, I[1]);
  dart.setFieldSignature(form$._FormPageState, () => ({
    __proto__: dart.getFields(form$._FormPageState.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    questions: dart.finalFieldType(core.List$(form$.Question))
  }));
  var label$0 = dart.privateName(radio_button, "RadioButton.label");
  var group$0 = dart.privateName(radio_button, "RadioButton.group");
  var onPress$ = dart.privateName(radio_button, "RadioButton.onPress");
  var isChecked$ = dart.privateName(radio_button, "RadioButton.isChecked");
  var color$0 = dart.privateName(radio_button, "RadioButton.color");
  radio_button.RadioButton = class RadioButton extends framework.StatefulWidget {
    get label() {
      return this[label$0];
    }
    set label(value) {
      super.label = value;
    }
    get group() {
      return this[group$0];
    }
    set group(value) {
      super.group = value;
    }
    get onPress() {
      return this[onPress$];
    }
    set onPress(value) {
      super.onPress = value;
    }
    get isChecked() {
      return this[isChecked$];
    }
    set isChecked(value) {
      super.isChecked = value;
    }
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let label = opts && 'label' in opts ? opts.label : null;
      let group = opts && 'group' in opts ? opts.group : null;
      let onPress = opts && 'onPress' in opts ? opts.onPress : null;
      let color = opts && 'color' in opts ? opts.color : C[2] || CT.C2;
      let isChecked = opts && 'isChecked' in opts ? opts.isChecked : false;
      return new radio_button.RadioButton.new({key: key, label: label, group: group, onPress: onPress, color: color, isChecked: isChecked});
    }
    createState() {
      return new radio_button._RadioButtonState.new();
    }
  };
  (radio_button.RadioButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let group = opts && 'group' in opts ? opts.group : null;
    let onPress = opts && 'onPress' in opts ? opts.onPress : null;
    let color = opts && 'color' in opts ? opts.color : C[2] || CT.C2;
    let isChecked = opts && 'isChecked' in opts ? opts.isChecked : false;
    this[label$0] = label;
    this[group$0] = group;
    this[onPress$] = onPress;
    this[color$0] = color;
    this[isChecked$] = isChecked;
    radio_button.RadioButton.__proto__.new.call(this, {key: key});
    ;
  }).prototype = radio_button.RadioButton.prototype;
  dart.addTypeTests(radio_button.RadioButton);
  dart.addTypeCaches(radio_button.RadioButton);
  dart.setMethodSignature(radio_button.RadioButton, () => ({
    __proto__: dart.getMethods(radio_button.RadioButton.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(radio_button.RadioButton, I[2]);
  dart.setFieldSignature(radio_button.RadioButton, () => ({
    __proto__: dart.getFields(radio_button.RadioButton.__proto__),
    label: dart.finalFieldType(core.String),
    group: dart.finalFieldType(core.String),
    onPress: dart.finalFieldType(core.Function),
    isChecked: dart.finalFieldType(core.bool),
    color: dart.finalFieldType(ui.Color)
  }));
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  radio_button._RadioButtonState = class _RadioButtonState extends framework.State$(radio_button.RadioButton) {
    build(context) {
      return new (T.RadioListTileOfString()).new({contentPadding: C[27] || CT.C27, controlAffinity: list_tile.ListTileControlAffinity.leading, visualDensity: theme_data.VisualDensity.comfortable, title: new text.Text.new(this.widget.label, {style: C[28] || CT.C28}), value: this.widget.label, selected: this.widget.isChecked, groupValue: this.widget.group, onChanged: dart.fn(value => dart.dsend(this.widget, 'onPress', []), T.StringNTovoid()), activeColor: this.widget.color});
    }
    static ['_#new#tearOff']() {
      return new radio_button._RadioButtonState.new();
    }
  };
  (radio_button._RadioButtonState.new = function() {
    radio_button._RadioButtonState.__proto__.new.call(this);
    ;
  }).prototype = radio_button._RadioButtonState.prototype;
  dart.addTypeTests(radio_button._RadioButtonState);
  dart.addTypeCaches(radio_button._RadioButtonState);
  dart.setMethodSignature(radio_button._RadioButtonState, () => ({
    __proto__: dart.getMethods(radio_button._RadioButtonState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(radio_button._RadioButtonState, I[2]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:flutter_app/screens/form.dart": form$,
    "package:flutter_app/ui/radio_button.dart": radio_button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/screens/form.dart","/zapp/project/lib/ui/radio_button.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    screens__form: form$,
    ui__radio_button: radio_button
  };
}));

//# sourceMappingURL=main.js.map
