import { defineComponent, ref, mergeModels, unref, withCtx, createVNode, useSlots, useModel, computed, mergeProps, renderSlot, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, createCommentVNode, renderList, reactive, watch, withDirectives, useId, inject, provide, readonly, resolveDynamicComponent, toRef, useTemplateRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrGetDirectiveProps, ssrRenderVNode, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardProps, StepperRoot, StepperItem, StepperTrigger, StepperIndicator, StepperSeparator, StepperTitle, StepperDescription, Primitive, Label, useForwardPropsEmits, RadioGroupRoot, RadioGroupItem, RadioGroupIndicator, SelectRoot, SelectTrigger, SelectPortal, SelectContent, SelectGroup, SelectLabel, SelectSeparator, SelectItem, SelectItemText, SelectItemIndicator, SelectArrow, CheckboxRoot, CheckboxIndicator } from 'reka-ui';
import { reactivePick, useEventBus, useVModel } from '@vueuse/core';
import { _ as _export_sfc, c as useSeoMeta, C as useToast, e as useAppConfig, t as tv, g as get, f as _sfc_main$d, B as _sfc_main$8$1, h as formBusInjectionKey, i as formStateInjectionKey, j as formErrorsInjectionKey, k as formInputsInjectionKey, l as formLoadingInjectionKey, m as formOptionsInjectionKey, o as inputIdInjectionKey, p as formFieldInjectionKey, q as useFormField, r as usePortal, s as useFieldGroup, v as useComponentIcons, w as isArrayOfArray, x as _sfc_main$b, y as _sfc_main$c, z as looseToNumber, A as getDisplayValue } from './server.mjs';
import { q as defu } from '../nitro/nitro.mjs';
import { vMaska } from 'maska/vue';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@unhead/schema-org/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'xml2js';
import 'node:url';
import '@iconify/utils';
import 'consola';

const theme$6 = {
  "slots": {
    "root": "flex gap-4",
    "header": "flex",
    "item": "group text-center relative w-full",
    "container": "relative",
    "trigger": "rounded-full font-medium text-center align-middle flex items-center justify-center font-semibold group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted bg-elevated focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full",
    "icon": "shrink-0",
    "separator": "absolute rounded-full group-data-[disabled]:opacity-75 bg-accented",
    "wrapper": "",
    "title": "font-medium text-default",
    "description": "text-muted text-wrap",
    "content": "size-full"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "container": "flex justify-center",
        "separator": "top-[calc(50%-2px)] h-0.5",
        "wrapper": "mt-1"
      },
      "vertical": {
        "header": "flex-col gap-4",
        "item": "flex text-start",
        "separator": "start-[calc(50%-1px)] -bottom-[10px] w-0.5"
      }
    },
    "size": {
      "xs": {
        "trigger": "size-6 text-xs",
        "icon": "size-3",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-1.5"
      },
      "sm": {
        "trigger": "size-8 text-sm",
        "icon": "size-4",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-2"
      },
      "md": {
        "trigger": "size-10 text-base",
        "icon": "size-5",
        "title": "text-sm",
        "description": "text-sm",
        "wrapper": "mt-2.5"
      },
      "lg": {
        "trigger": "size-12 text-lg",
        "icon": "size-6",
        "title": "text-base",
        "description": "text-base",
        "wrapper": "mt-3"
      },
      "xl": {
        "trigger": "size-14 text-xl",
        "icon": "size-7",
        "title": "text-lg",
        "description": "text-lg",
        "wrapper": "mt-3.5"
      }
    },
    "color": {
      "primary": {
        "trigger": "group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary focus-visible:outline-primary",
        "separator": "group-data-[state=completed]:bg-primary"
      },
      "secondary": {
        "trigger": "group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary focus-visible:outline-secondary",
        "separator": "group-data-[state=completed]:bg-secondary"
      },
      "success": {
        "trigger": "group-data-[state=completed]:bg-success group-data-[state=active]:bg-success focus-visible:outline-success",
        "separator": "group-data-[state=completed]:bg-success"
      },
      "info": {
        "trigger": "group-data-[state=completed]:bg-info group-data-[state=active]:bg-info focus-visible:outline-info",
        "separator": "group-data-[state=completed]:bg-info"
      },
      "warning": {
        "trigger": "group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning focus-visible:outline-warning",
        "separator": "group-data-[state=completed]:bg-warning"
      },
      "error": {
        "trigger": "group-data-[state=completed]:bg-error group-data-[state=active]:bg-error focus-visible:outline-error",
        "separator": "group-data-[state=completed]:bg-error"
      },
      "neutral": {
        "trigger": "group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted focus-visible:outline-inverted",
        "separator": "group-data-[state=completed]:bg-inverted"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "separator": "start-[calc(50%+16px)] end-[calc(-50%+16px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "separator": "start-[calc(50%+20px)] end-[calc(-50%+20px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "separator": "start-[calc(50%+28px)] end-[calc(-50%+28px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "separator": "start-[calc(50%+32px)] end-[calc(-50%+32px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "separator": "start-[calc(50%+36px)] end-[calc(-50%+36px)]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "separator": "top-[30px]",
        "item": "gap-1.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "separator": "top-[38px]",
        "item": "gap-2"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "separator": "top-[46px]",
        "item": "gap-2.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "separator": "top-[54px]",
        "item": "gap-3"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "separator": "top-[62px]",
        "item": "gap-3.5"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};
const _sfc_main$9 = {
  __name: "UStepper",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    items: { type: Array, required: true },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    valueKey: { type: null, required: false, default: "value" },
    defaultValue: { type: [String, Number], required: false },
    disabled: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    linear: { type: Boolean, required: false, default: true }
  }, {
    "modelValue": { type: [String, Number] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["next", "prev"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "linear"));
    const ui = computed(() => tv({ extend: tv(theme$6), ...appConfig.ui?.stepper || {} })({
      orientation: props.orientation,
      size: props.size,
      color: props.color
    }));
    const currentStepIndex = computed({
      get() {
        const value = modelValue.value ?? props.defaultValue;
        return (typeof value === "string" ? props.items.findIndex((item) => get(item, props.valueKey) === value) : value) ?? 0;
      },
      set(value) {
        modelValue.value = get(props.items?.[value], props.valueKey) ?? value;
      }
    });
    const currentStep = computed(() => props.items?.[currentStepIndex.value]);
    const hasNext = computed(() => currentStepIndex.value < props.items?.length - 1);
    const hasPrev = computed(() => currentStepIndex.value > 0);
    __expose({
      next() {
        if (hasNext.value) {
          currentStepIndex.value += 1;
          emits("next", currentStep.value);
        }
      },
      prev() {
        if (hasPrev.value) {
          currentStepIndex.value -= 1;
          emits("prev", currentStep.value);
        }
      },
      hasNext,
      hasPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperRoot), mergeProps(unref(rootProps), {
        modelValue: currentStepIndex.value,
        "onUpdate:modelValue": ($event) => currentStepIndex.value = $event,
        orientation: __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.items, (item, count) => {
              _push2(ssrRenderComponent(unref(StepperItem), {
                key: count,
                step: count,
                disabled: item.disabled || props.disabled,
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: [props.ui?.container, item.ui?.container] }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(StepperTrigger), {
                      "data-slot": "trigger",
                      class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger] })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(StepperIndicator), {
                            "data-slot": "indicator",
                            class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "indicator", {
                                  item,
                                  ui: ui.value
                                }, () => {
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_sfc_main$d, {
                                      name: item.icon,
                                      "data-slot": "icon",
                                      class: ui.value.icon({ class: [props.ui?.icon, item.ui?.icon] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!--[-->${ssrInterpolate(count + 1)}<!--]-->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "indicator", {
                                    item,
                                    ui: ui.value
                                  }, () => [
                                    item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                      key: 0,
                                      name: item.icon,
                                      "data-slot": "icon",
                                      class: ui.value.icon({ class: [props.ui?.icon, item.ui?.icon] })
                                    }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createTextVNode(toDisplayString(count + 1), 1)
                                    ], 64))
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(StepperIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "indicator", {
                                  item,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "icon",
                                    class: ui.value.icon({ class: [props.ui?.icon, item.ui?.icon] })
                                  }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(count + 1), 1)
                                  ], 64))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (count < __props.items.length - 1) {
                      _push3(ssrRenderComponent(unref(StepperSeparator), {
                        "data-slot": "separator",
                        class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-wrapper` : "wrapper", { item }, () => {
                      if (item.title || !!slots[item.slot ? `${item.slot}-title` : "title"]) {
                        _push3(ssrRenderComponent(unref(StepperTitle), {
                          as: "div",
                          "data-slot": "title",
                          class: ui.value.title({ class: [props.ui?.title, item.ui?.title] })
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => {
                                _push4(`${ssrInterpolate(item.title)}`);
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.description || !!slots[item.slot ? `${item.slot}-description` : "description"]) {
                        _push3(ssrRenderComponent(unref(StepperDescription), {
                          as: "div",
                          "data-slot": "description",
                          class: ui.value.description({ class: [props.ui?.description, item.ui?.description] })
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => {
                                _push4(`${ssrInterpolate(item.description)}`);
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                                  createTextVNode(toDisplayString(item.description), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                      }, [
                        createVNode(unref(StepperTrigger), {
                          "data-slot": "trigger",
                          class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger] })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(StepperIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "indicator", {
                                  item,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "icon",
                                    class: ui.value.icon({ class: [props.ui?.icon, item.ui?.icon] })
                                  }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(count + 1), 1)
                                  ], 64))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        count < __props.items.length - 1 ? (openBlock(), createBlock(unref(StepperSeparator), {
                          key: 0,
                          "data-slot": "separator",
                          class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] })
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ], 2),
                      createVNode("div", {
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-wrapper` : "wrapper", { item }, () => [
                          item.title || !!slots[item.slot ? `${item.slot}-title` : "title"] ? (openBlock(), createBlock(unref(StepperTitle), {
                            key: 0,
                            as: "div",
                            "data-slot": "title",
                            class: ui.value.title({ class: [props.ui?.title, item.ui?.title] })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          item.description || !!slots[item.slot ? `${item.slot}-description` : "description"] ? (openBlock(), createBlock(unref(StepperDescription), {
                            key: 1,
                            as: "div",
                            "data-slot": "description",
                            class: ui.value.description({ class: [props.ui?.description, item.ui?.description] })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                                createTextVNode(toDisplayString(item.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true)
                        ])
                      ], 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (currentStep.value?.content || !!slots.content || currentStep.value?.slot && !!slots[currentStep.value.slot]) {
              _push2(`<div data-slot="content" class="${ssrRenderClass(ui.value.content({ class: props.ui?.content }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, currentStep.value?.slot || "content", { item: currentStep.value }, () => {
                _push2(`${ssrInterpolate(currentStep.value?.content)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "header",
                class: ui.value.header({ class: props.ui?.header })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, count) => {
                  return openBlock(), createBlock(unref(StepperItem), {
                    key: count,
                    step: count,
                    disabled: item.disabled || props.disabled,
                    "data-slot": "item",
                    class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                      }, [
                        createVNode(unref(StepperTrigger), {
                          "data-slot": "trigger",
                          class: ui.value.trigger({ class: [props.ui?.trigger, item.ui?.trigger] })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(StepperIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "indicator", {
                                  item,
                                  ui: ui.value
                                }, () => [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                    key: 0,
                                    name: item.icon,
                                    "data-slot": "icon",
                                    class: ui.value.icon({ class: [props.ui?.icon, item.ui?.icon] })
                                  }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(count + 1), 1)
                                  ], 64))
                                ])
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        count < __props.items.length - 1 ? (openBlock(), createBlock(unref(StepperSeparator), {
                          key: 0,
                          "data-slot": "separator",
                          class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator] })
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ], 2),
                      createVNode("div", {
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-wrapper` : "wrapper", { item }, () => [
                          item.title || !!slots[item.slot ? `${item.slot}-title` : "title"] ? (openBlock(), createBlock(unref(StepperTitle), {
                            key: 0,
                            as: "div",
                            "data-slot": "title",
                            class: ui.value.title({ class: [props.ui?.title, item.ui?.title] })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          item.description || !!slots[item.slot ? `${item.slot}-description` : "description"] ? (openBlock(), createBlock(unref(StepperDescription), {
                            key: 1,
                            as: "div",
                            "data-slot": "description",
                            class: ui.value.description({ class: [props.ui?.description, item.ui?.description] })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                                createTextVNode(toDisplayString(item.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["step", "disabled", "class"]);
                }), 128))
              ], 2),
              currentStep.value?.content || !!slots.content || currentStep.value?.slot && !!slots[currentStep.value.slot] ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "content",
                class: ui.value.content({ class: props.ui?.content })
              }, [
                renderSlot(_ctx.$slots, currentStep.value?.slot || "content", { item: currentStep.value }, () => [
                  createTextVNode(toDisplayString(currentStep.value?.content), 1)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isStandardSchema(schema) {
  return "~standard" in schema;
}
async function validateStandardSchema(state, schema) {
  const result = await schema["~standard"].validate(state);
  if (result.issues) {
    return {
      errors: result.issues?.map((issue) => ({
        name: issue.path?.map((item) => typeof item === "object" ? item.key : item).join(".") || "",
        message: issue.message
      })) || [],
      result: null
    };
  }
  return {
    errors: null,
    result: result.value
  };
}
async function validateSuperstructSchema(state, schema) {
  const [err, result] = schema.validate(state);
  if (err) {
    const errors = err.failures().map((error) => ({
      message: error.message,
      name: error.path.join(".")
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    errors: null,
    result
  };
}
function validateSchema(state, schema) {
  if (isStandardSchema(schema)) {
    return validateStandardSchema(state, schema);
  } else if (isSuperStructSchema(schema)) {
    return validateSuperstructSchema(state, schema);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}
function getAtPath(data, path) {
  if (!path) return data;
  const value = path.split(".").reduce(
    (value2, key) => value2?.[key],
    data
  );
  return value;
}
function setAtPath(data, path, value) {
  if (!path) return Object.assign(data, value);
  if (!data) return data;
  const keys = path.split(".");
  let current = data;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] === void 0 || current[key] === null) {
      if (i + 1 < keys.length && !Number.isNaN(Number(keys[i + 1]))) {
        current[key] = [];
      } else {
        current[key] = {};
      }
    }
    current = current[key];
  }
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  return data;
}
class FormValidationException extends Error {
  formId;
  errors;
  constructor(formId, errors) {
    super("Form validation exception");
    this.formId = formId;
    this.errors = errors;
    Object.setPrototypeOf(this, FormValidationException.prototype);
  }
}
const theme$5 = {
  "base": ""
};
const _sfc_main$8 = {
  __name: "UForm",
  __ssrInlineRender: true,
  props: {
    id: { type: [String, Number], required: false },
    schema: { type: null, required: false },
    state: { type: null, required: false },
    validate: { type: Function, required: false },
    validateOn: { type: Array, required: false, default() {
      return ["input", "blur", "change"];
    } },
    disabled: { type: Boolean, required: false },
    name: { type: null, required: false },
    validateOnInputDelay: { type: Number, required: false, default: 300 },
    transform: { type: null, required: false, default: () => true },
    nested: { type: Boolean, required: false },
    loadingAuto: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    onSubmit: { type: Function, required: false }
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$5), ...appConfig.ui?.form || {} }));
    const formId = props.id ?? useId();
    const bus = useEventBus(`form-${formId}`);
    const parentBus = props.nested === true && inject(
      formBusInjectionKey,
      void 0
    );
    const parentState = props.nested === true ? inject(formStateInjectionKey, void 0) : void 0;
    const state = computed(() => {
      if (parentState?.value) {
        return props.name ? getAtPath(parentState.value, props.name) : parentState.value;
      }
      return props.state;
    });
    provide(formBusInjectionKey, bus);
    provide(formStateInjectionKey, state);
    const nestedForms = ref(/* @__PURE__ */ new Map());
    const errors = ref([]);
    provide(formErrorsInjectionKey, errors);
    const inputs = ref({});
    provide(formInputsInjectionKey, inputs);
    const dirtyFields = reactive(/* @__PURE__ */ new Set());
    const touchedFields = reactive(/* @__PURE__ */ new Set());
    const blurredFields = reactive(/* @__PURE__ */ new Set());
    function resolveErrorIds(errs) {
      return errs.map((err) => ({
        ...err,
        id: err?.name ? inputs.value[err.name]?.id : void 0
      }));
    }
    const transformedState = ref(null);
    async function getErrors() {
      let errs = props.validate ? await props.validate(state.value) ?? [] : [];
      if (props.schema) {
        const { errors: errors2, result } = await validateSchema(state.value, props.schema);
        if (errors2) {
          errs = errs.concat(errors2);
        } else {
          transformedState.value = result;
        }
      }
      return resolveErrorIds(errs);
    }
    async function _validate(opts = { silent: false, nested: false, transform: false }) {
      const names = opts.name && !Array.isArray(opts.name) ? [opts.name] : opts.name;
      let nestedResults = [];
      let nestedErrors = [];
      if (!names && opts.nested) {
        const validations = Array.from(nestedForms.value.values()).map(
          (form) => validateNestedForm(form, opts)
        );
        const results = await Promise.all(validations);
        nestedErrors = results.filter((r) => r.error).flatMap((r) => r.error.errors.map((e) => addFormPath(e, r.name)));
        nestedResults = results.filter((r) => r.output !== void 0);
      }
      const currentErrors = await getErrors();
      const allErrors = [...currentErrors, ...nestedErrors];
      if (names) {
        errors.value = filterErrorsByNames(allErrors, names);
      } else {
        errors.value = allErrors;
      }
      if (errors.value?.length) {
        if (opts.silent) return false;
        throw new FormValidationException(formId, errors.value);
      }
      if (opts.transform) {
        nestedResults.forEach((result) => {
          if (result.name) {
            setAtPath(transformedState.value, result.name, result.output);
          } else {
            Object.assign(transformedState.value, result.output);
          }
        });
        return transformedState.value ?? state.value;
      }
      return state.value;
    }
    const loading = ref(false);
    provide(formLoadingInjectionKey, readonly(loading));
    async function onSubmitWrapper(payload) {
      loading.value = props.loadingAuto && true;
      const event = payload;
      try {
        event.data = await _validate({ nested: true, transform: props.transform });
        await props.onSubmit?.(event);
        dirtyFields.clear();
      } catch (error) {
        if (!(error instanceof FormValidationException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: error.errors
        };
        emits("error", errorEvent);
      } finally {
        loading.value = false;
      }
    }
    const disabled = computed(() => props.disabled || loading.value);
    provide(formOptionsInjectionKey, computed(() => ({
      disabled: disabled.value,
      validateOnInputDelay: props.validateOnInputDelay
    })));
    async function validateNestedForm(form, opts) {
      try {
        const result = await form.validate({ ...opts, silent: false });
        return { name: form.name, output: result };
      } catch (error) {
        if (!(error instanceof FormValidationException)) throw error;
        return { name: form.name, error };
      }
    }
    function addFormPath(error, formPath) {
      if (!formPath || !error.name) return error;
      return { ...error, name: formPath + "." + error.name };
    }
    function stripFormPath(error, formPath) {
      const prefix = formPath + ".";
      const name = error?.name?.startsWith(prefix) ? error.name.substring(prefix.length) : error.name;
      return { ...error, name };
    }
    function filterFormErrors(errors2, formPath) {
      if (!formPath) return errors2;
      return errors2.filter((e) => e?.name?.startsWith(formPath + ".")).map((e) => stripFormPath(e, formPath));
    }
    function getFormErrors(form) {
      return form.api.getErrors().map(
        (e) => form.name ? { ...e, name: form.name + "." + e.name } : e
      );
    }
    function matchesTarget(target, path) {
      if (!target || !path) return true;
      if (target instanceof RegExp) return target.test(path);
      return path === target || typeof target === "string" && target.startsWith(path + ".");
    }
    function getNestedTarget(target, formPath) {
      if (!target || target instanceof RegExp) return target;
      if (formPath === target) return void 0;
      if (typeof target === "string" && target.startsWith(formPath + ".")) {
        return target.substring(formPath.length + 1);
      }
      return target;
    }
    function filterErrorsByNames(allErrors, names) {
      const nameSet = new Set(names);
      const patterns = names.map((name) => inputs.value?.[name]?.pattern).filter(Boolean);
      const matchesNames = (error) => {
        if (!error.name) return false;
        if (nameSet.has(error.name)) return true;
        return patterns.some((pattern) => pattern.test(error.name));
      };
      const keepErrors = errors.value.filter((error) => !matchesNames(error));
      const newErrors = allErrors.filter(matchesNames);
      return [...keepErrors, ...newErrors];
    }
    function filterErrorsByTarget(currentErrors, target) {
      return currentErrors.filter(
        (err) => target instanceof RegExp ? !(err.name && target.test(err.name)) : !err.name || err.name !== target
      );
    }
    function isLocalError(error) {
      return !error.name || !!inputs.value[error.name];
    }
    const api = {
      validate: _validate,
      errors,
      setErrors(errs, name) {
        const localErrors = resolveErrorIds(errs.filter(isLocalError));
        const nestedErrors = [];
        for (const form of nestedForms.value.values()) {
          if (matchesTarget(name, form.name)) {
            const formErrors = filterFormErrors(errs, form.name);
            form.api.setErrors(formErrors, getNestedTarget(name, form.name || ""));
            nestedErrors.push(...getFormErrors(form));
          }
        }
        if (name) {
          const keepErrors = filterErrorsByTarget(errors.value, name);
          errors.value = [...keepErrors, ...localErrors, ...nestedErrors];
        } else {
          errors.value = [...localErrors, ...nestedErrors];
        }
      },
      async submit() {
        await onSubmitWrapper(new Event("submit"));
      },
      getErrors(name) {
        if (!name) return errors.value;
        return errors.value.filter(
          (err) => name instanceof RegExp ? err.name && name.test(err.name) : err.name === name
        );
      },
      clear(name) {
        const localErrors = name ? errors.value.filter(
          (err) => isLocalError(err) && (name instanceof RegExp ? !(err.name && name.test(err.name)) : err.name !== name)
        ) : [];
        const nestedErrors = [];
        for (const form of nestedForms.value.values()) {
          if (matchesTarget(name, form.name)) form.api.clear();
          nestedErrors.push(...getFormErrors(form));
        }
        errors.value = [...localErrors, ...nestedErrors];
      },
      disabled,
      loading,
      dirty: computed(() => !!dirtyFields.size),
      dirtyFields: readonly(dirtyFields),
      blurredFields: readonly(blurredFields),
      touchedFields: readonly(touchedFields)
    };
    __expose(api);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(parentBus) ? "div" : "form"), mergeProps({
        id: unref(formId),
        class: ui.value({ class: props.class }),
        onSubmit: onSubmitWrapper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              errors: errors.value,
              loading: loading.value
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                errors: errors.value,
                loading: loading.value
              })
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const theme$4 = {
  "slots": {
    "root": "",
    "wrapper": "",
    "labelWrapper": "flex content-center items-center justify-between gap-1",
    "label": "block font-medium text-default",
    "container": "relative",
    "description": "text-muted",
    "error": "mt-2 text-error",
    "hint": "text-muted",
    "help": "mt-2 text-muted"
  },
  "variants": {
    "size": {
      "xs": {
        "root": "text-xs"
      },
      "sm": {
        "root": "text-xs"
      },
      "md": {
        "root": "text-sm"
      },
      "lg": {
        "root": "text-sm"
      },
      "xl": {
        "root": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "orientation": {
      "vertical": {
        "container": "mt-1"
      },
      "horizontal": {
        "root": "flex justify-between place-items-baseline gap-2"
      }
    }
  },
  "defaultVariants": {
    "size": "md",
    "orientation": "vertical"
  }
};
const _sfc_main$7 = {
  __name: "UFormField",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    errorPattern: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    help: { type: String, required: false },
    error: { type: [Boolean, String], required: false, default: void 0 },
    hint: { type: String, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    eagerValidation: { type: Boolean, required: false },
    validateOnInputDelay: { type: Number, required: false },
    orientation: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$4), ...appConfig.ui?.formField || {} })({
      size: props.size,
      required: props.required,
      orientation: props.orientation
    }));
    const formErrors = inject(formErrorsInjectionKey, null);
    const error = computed(() => props.error || formErrors?.value?.find((error2) => error2.name === props.name || props.errorPattern && error2.name?.match(props.errorPattern))?.message);
    const id = ref(useId());
    const ariaId = id.value;
    const formInputs = inject(formInputsInjectionKey, void 0);
    watch(id, () => {
      if (formInputs && props.name) {
        formInputs.value[props.name] = { id: id.value, pattern: props.errorPattern };
      }
    }, { immediate: true });
    provide(inputIdInjectionKey, id);
    provide(formFieldInjectionKey, computed(() => ({
      error: error.value,
      name: props.name,
      size: props.size,
      eagerValidation: props.eagerValidation,
      validateOnInputDelay: props.validateOnInputDelay,
      errorPattern: props.errorPattern,
      hint: props.hint,
      description: props.description,
      help: props.help,
      ariaId
    })));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.label || !!slots.label) {
              _push2(`<div data-slot="labelWrapper" class="${ssrRenderClass(ui.value.labelWrapper({ class: props.ui?.labelWrapper }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Label), {
                for: id.value,
                "data-slot": "label",
                class: ui.value.label({ class: props.ui?.label })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                      _push3(`${ssrInterpolate(__props.label)}`);
                    }, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                        createTextVNode(toDisplayString(__props.label), 1)
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (__props.hint || !!slots.hint) {
                _push2(`<span${ssrRenderAttr("id", `${unref(ariaId)}-hint`)} data-slot="hint" class="${ssrRenderClass(ui.value.hint({ class: props.ui?.hint }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "hint", { hint: __props.hint }, () => {
                  _push2(`${ssrInterpolate(__props.hint)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.description || !!slots.description) {
              _push2(`<p${ssrRenderAttr("id", `${unref(ariaId)}-description`)} data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                _push2(`${ssrInterpolate(__props.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="${ssrRenderClass([(__props.label || !!slots.label || __props.description || !!slots.description) && ui.value.container({ class: props.ui?.container })])}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { error: error.value }, null, _push2, _parent2, _scopeId);
            if (props.error !== false && (typeof error.value === "string" && error.value || !!slots.error)) {
              _push2(`<div${ssrRenderAttr("id", `${unref(ariaId)}-error`)} data-slot="error" class="${ssrRenderClass(ui.value.error({ class: props.ui?.error }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "error", { error: error.value }, () => {
                _push2(`${ssrInterpolate(error.value)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else if (__props.help || !!slots.help) {
              _push2(`<div${ssrRenderAttr("id", `${unref(ariaId)}-help`)} data-slot="help" class="${ssrRenderClass(ui.value.help({ class: props.ui?.help }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "help", { help: __props.help }, () => {
                _push2(`${ssrInterpolate(__props.help)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "labelWrapper",
                  class: ui.value.labelWrapper({ class: props.ui?.labelWrapper })
                }, [
                  createVNode(unref(Label), {
                    for: id.value,
                    "data-slot": "label",
                    class: ui.value.label({ class: props.ui?.label })
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                        createTextVNode(toDisplayString(__props.label), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["for", "class"]),
                  __props.hint || !!slots.hint ? (openBlock(), createBlock("span", {
                    key: 0,
                    id: `${unref(ariaId)}-hint`,
                    "data-slot": "hint",
                    class: ui.value.hint({ class: props.ui?.hint })
                  }, [
                    renderSlot(_ctx.$slots, "hint", { hint: __props.hint }, () => [
                      createTextVNode(toDisplayString(__props.hint), 1)
                    ])
                  ], 10, ["id"])) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  id: `${unref(ariaId)}-description`,
                  "data-slot": "description",
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 10, ["id"])) : createCommentVNode("", true)
              ], 2),
              createVNode("div", {
                class: [(__props.label || !!slots.label || __props.description || !!slots.description) && ui.value.container({ class: props.ui?.container })]
              }, [
                renderSlot(_ctx.$slots, "default", { error: error.value }),
                props.error !== false && (typeof error.value === "string" && error.value || !!slots.error) ? (openBlock(), createBlock("div", {
                  key: 0,
                  id: `${unref(ariaId)}-error`,
                  "data-slot": "error",
                  class: ui.value.error({ class: props.ui?.error })
                }, [
                  renderSlot(_ctx.$slots, "error", { error: error.value }, () => [
                    createTextVNode(toDisplayString(error.value), 1)
                  ])
                ], 10, ["id"])) : __props.help || !!slots.help ? (openBlock(), createBlock("div", {
                  key: 1,
                  id: `${unref(ariaId)}-help`,
                  "data-slot": "help",
                  class: ui.value.help({ class: props.ui?.help })
                }, [
                  renderSlot(_ctx.$slots, "help", { help: __props.help }, () => [
                    createTextVNode(toDisplayString(__props.help), 1)
                  ])
                ], 10, ["id"])) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const theme$3 = {
  "slots": {
    "root": "relative",
    "fieldset": "flex gap-x-2",
    "legend": "mb-1 block font-medium text-default",
    "item": "flex items-start",
    "container": "flex items-center",
    "base": "rounded-full ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full after:bg-default after:rounded-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "item": ""
      },
      "card": {
        "item": "border border-muted rounded-lg"
      },
      "table": {
        "item": "border border-muted"
      }
    },
    "orientation": {
      "horizontal": {
        "fieldset": "flex-row"
      },
      "vertical": {
        "fieldset": "flex-col"
      }
    },
    "indicator": {
      "start": {
        "item": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "item": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "sm": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3.5",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "md": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "lg": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4.5",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "xl": {
        "fieldset": "gap-y-1.5",
        "legend": "text-base",
        "base": "size-5",
        "item": "text-base",
        "container": "h-6",
        "indicator": "after:size-2"
      }
    },
    "disabled": {
      "true": {
        "item": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "required": {
      "true": {
        "legend": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-3"
      }
    },
    {
      "size": "md",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-4.5"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "table",
      "class": {
        "item": "first-of-type:rounded-s-lg last-of-type:rounded-e-lg",
        "fieldset": "gap-0 -space-x-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "table",
      "class": {
        "item": "first-of-type:rounded-t-lg last-of-type:rounded-b-lg",
        "fieldset": "gap-0 -space-y-px"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "color": "primary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "secondary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-secondary/10 has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "success",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-success/10 has-data-[state=checked]:border-success/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "info",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-info/10 has-data-[state=checked]:border-info/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "warning",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-warning/10 has-data-[state=checked]:border-warning/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "error",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-error/10 has-data-[state=checked]:border-error/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "neutral",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-elevated has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "variant": [
        "card",
        "table"
      ],
      "disabled": true,
      "class": {
        "item": "cursor-not-allowed"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "orientation": "vertical",
    "indicator": "start"
  }
};
const _sfc_main$6 = {
  __name: "URadioGroup",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    legend: { type: String, required: false },
    valueKey: { type: null, required: false, default: "value" },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    items: { type: null, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    size: { type: null, required: false },
    variant: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    indicator: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    loop: { type: Boolean, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "loop", "required"), emits);
    const { emitFormChange, emitFormInput, color, name, size, id: _id, disabled, ariaAttrs } = useFormField(props, { bind: false });
    const id = _id.value ?? useId();
    const ui = computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.radioGroup || {} })({
      size: size.value,
      color: color.value,
      disabled: disabled.value,
      required: props.required,
      orientation: props.orientation,
      variant: props.variant,
      indicator: props.indicator
    }));
    function normalizeItem(item) {
      if (item === null) {
        return {
          id: `${id}:null`,
          value: void 0,
          label: void 0
        };
      }
      if (typeof item === "string" || typeof item === "number" || typeof item === "bigint") {
        return {
          id: `${id}:${item}`,
          value: String(item),
          label: String(item)
        };
      }
      const value = get(item, props.valueKey);
      const label = get(item, props.labelKey);
      const description = get(item, props.descriptionKey);
      return {
        ...item,
        value,
        label,
        description,
        id: `${id}:${value}`
      };
    }
    const normalizedItems = computed(() => {
      if (!props.items) {
        return [];
      }
      return props.items.map(normalizeItem);
    });
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupRoot), mergeProps({ id: unref(id) }, unref(rootProps), {
        "model-value": __props.modelValue,
        "default-value": __props.defaultValue,
        orientation: __props.orientation,
        name: unref(name),
        disabled: unref(disabled),
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        "onUpdate:modelValue": onUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<fieldset${ssrRenderAttrs(mergeProps({
              "data-slot": "fieldset",
              class: ui.value.fieldset({ class: props.ui?.fieldset })
            }, unref(ariaAttrs)))}${_scopeId}>`);
            if (__props.legend || !!slots.legend) {
              _push2(`<legend data-slot="legend" class="${ssrRenderClass(ui.value.legend({ class: props.ui?.legend }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "legend", {}, () => {
                _push2(`${ssrInterpolate(__props.legend)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</legend>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(normalizedItems.value, (item) => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? "div" : unref(Label)), {
                key: item.value,
                "data-slot": "item",
                class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class], disabled: item.disabled || unref(disabled) })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: [props.ui?.container, item.ui?.container] }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(RadioGroupItem), {
                      id: item.id,
                      value: item.value,
                      disabled: item.disabled || unref(disabled),
                      "data-slot": "base",
                      class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled || unref(disabled) })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(RadioGroupIndicator), {
                            "data-slot": "indicator",
                            class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(RadioGroupIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (item.label || !!slots.label || (item.description || !!slots.description)) {
                      _push3(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] }))}"${_scopeId2}>`);
                      if (item.label || !!slots.label) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, "label", {
                                item,
                                modelValue: __props.modelValue
                              }, () => {
                                _push4(`${ssrInterpolate(item.label)}`);
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "label", {
                                  item,
                                  modelValue: __props.modelValue
                                }, () => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }), _parent3, _scopeId2);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.description || !!slots.description) {
                        _push3(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: [props.ui?.description, item.ui?.description], disabled: item.disabled || unref(disabled) }))}"${_scopeId2}>`);
                        ssrRenderSlot(_ctx.$slots, "description", {
                          item,
                          modelValue: __props.modelValue
                        }, () => {
                          _push3(`${ssrInterpolate(item.description)}`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(`</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                      }, [
                        createVNode(unref(RadioGroupItem), {
                          id: item.id,
                          value: item.value,
                          disabled: item.disabled || unref(disabled),
                          "data-slot": "base",
                          class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(RadioGroupIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "disabled", "class"])
                      ], 2),
                      item.label || !!slots.label || (item.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        item.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          key: 0,
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "label", {
                              item,
                              modelValue: __props.modelValue
                            }, () => [
                              createTextVNode(toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["for", "class"])) : createCommentVNode("", true),
                        item.description || !!slots.description ? (openBlock(), createBlock("p", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: [props.ui?.description, item.ui?.description], disabled: item.disabled || unref(disabled) })
                        }, [
                          renderSlot(_ctx.$slots, "description", {
                            item,
                            modelValue: __props.modelValue
                          }, () => [
                            createTextVNode(toDisplayString(item.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
            });
            _push2(`<!--]--></fieldset>`);
          } else {
            return [
              createVNode("fieldset", mergeProps({
                "data-slot": "fieldset",
                class: ui.value.fieldset({ class: props.ui?.fieldset })
              }, unref(ariaAttrs)), [
                __props.legend || !!slots.legend ? (openBlock(), createBlock("legend", {
                  key: 0,
                  "data-slot": "legend",
                  class: ui.value.legend({ class: props.ui?.legend })
                }, [
                  renderSlot(_ctx.$slots, "legend", {}, () => [
                    createTextVNode(toDisplayString(__props.legend), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList(normalizedItems.value, (item) => {
                  return openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? "div" : unref(Label)), {
                    key: item.value,
                    "data-slot": "item",
                    class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class], disabled: item.disabled || unref(disabled) })
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        "data-slot": "container",
                        class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                      }, [
                        createVNode(unref(RadioGroupItem), {
                          id: item.id,
                          value: item.value,
                          disabled: item.disabled || unref(disabled),
                          "data-slot": "base",
                          class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(RadioGroupIndicator), {
                              "data-slot": "indicator",
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "disabled", "class"])
                      ], 2),
                      item.label || !!slots.label || (item.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "wrapper",
                        class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        item.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          key: 0,
                          for: item.id,
                          "data-slot": "label",
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label], disabled: item.disabled || unref(disabled) })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "label", {
                              item,
                              modelValue: __props.modelValue
                            }, () => [
                              createTextVNode(toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["for", "class"])) : createCommentVNode("", true),
                        item.description || !!slots.description ? (openBlock(), createBlock("p", {
                          key: 1,
                          "data-slot": "description",
                          class: ui.value.description({ class: [props.ui?.description, item.ui?.description], disabled: item.disabled || unref(disabled) })
                        }, [
                          renderSlot(_ctx.$slots, "description", {
                            item,
                            modelValue: __props.modelValue
                          }, () => [
                            createTextVNode(toDisplayString(item.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ], 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "base": [
      "relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed",
    "value": "truncate pointer-events-none",
    "placeholder": "truncate text-dimmed",
    "arrow": "fill-default",
    "content": "max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col",
    "viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
    "group": "p-1 isolate",
    "empty": "text-center text-muted",
    "label": "font-semibold text-highlighted",
    "separator": "-mx-1 my-1 h-px bg-border",
    "item": [
      "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
      "transition-colors before:transition-colors"
    ],
    "itemLeadingIcon": [
      "shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
      "transition-colors"
    ],
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemLeadingChip": "shrink-0",
    "itemLeadingChipSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemWrapper": "flex-1 flex flex-col min-w-0",
    "itemLabel": "truncate",
    "itemDescription": "truncate text-muted"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1 text-[10px]/3 gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4",
        "empty": "p-1 text-xs"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1.5 text-[10px]/3 gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4",
        "empty": "p-1.5 text-xs"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5",
        "empty": "p-1.5 text-sm"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-2 text-xs gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5",
        "empty": "p-2 text-sm"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemLeadingChip": "size-6",
        "itemLeadingChipSize": "lg",
        "itemTrailingIcon": "size-6",
        "empty": "p-2 text-base"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus:ring-2 focus:ring-inset focus:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus:ring-2 focus:ring-inset focus:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus:ring-2 focus:ring-inset focus:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus:ring-2 focus:ring-inset focus:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus:ring-2 focus:ring-inset focus:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus:ring-2 focus:ring-inset focus:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus:ring-2 focus:ring-inset focus:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "USelect",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    trailingIcon: { type: null, required: false },
    selectedIcon: { type: null, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    valueKey: { type: null, required: false, default: "value" },
    labelKey: { type: null, required: false, default: "label" },
    descriptionKey: { type: null, required: false, default: "description" },
    items: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    modelModifiers: { type: Object, required: false },
    multiple: { type: Boolean, required: false },
    by: { type: [String, Function], required: false },
    highlight: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    autocomplete: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  },
  emits: ["update:open", "change", "blur", "focus", "update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "disabled", "autocomplete", "required", "multiple", "by"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = toRef(() => props.arrow);
    const { emitFormChange, emitFormInput, emitFormBlur, emitFormFocus, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const selectSize = computed(() => fieldGroupSize.value || formGroupSize.value);
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.select || {} })({
      color: color.value,
      variant: props.variant,
      size: selectSize?.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const groups = computed(
      () => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []
    );
    const items = computed(() => groups.value.flatMap((group) => group));
    function displayValue(value) {
      if (props.multiple && Array.isArray(value)) {
        const displayedValues = value.map((item) => getDisplayValue(items.value, item, {
          labelKey: props.labelKey,
          valueKey: props.valueKey,
          by: props.by
        })).filter((v) => v != null && v !== "");
        return displayedValues.length > 0 ? displayedValues.join(", ") : void 0;
      }
      return getDisplayValue(items.value, value, {
        labelKey: props.labelKey,
        valueKey: props.valueKey,
        by: props.by
      });
    }
    const triggerRef = useTemplateRef("triggerRef");
    function onUpdate(value) {
      if (props.modelModifiers?.trim) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number) {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ??= null;
      }
      if (props.modelModifiers?.optional) {
        value ??= void 0;
      }
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function onUpdateOpen(value) {
      if (!value) {
        const event = new FocusEvent("blur");
        emits("blur", event);
        emitFormBlur();
      } else {
        const event = new FocusEvent("focus");
        emits("focus", event);
        emitFormFocus();
      }
    }
    function isSelectItem(item) {
      return typeof item === "object" && item !== null;
    }
    const viewportRef = useTemplateRef("viewportRef");
    __expose({
      triggerRef: toRef(() => triggerRef.value?.$el),
      viewportRef: toRef(() => viewportRef.value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectRoot), mergeProps({ name: unref(name) }, unref(rootProps), {
        autocomplete: __props.autocomplete,
        disabled: unref(disabled),
        "default-value": __props.defaultValue,
        "model-value": __props.modelValue,
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }, _attrs), {
        default: withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SelectTrigger), mergeProps({
              id: unref(id),
              ref_key: "triggerRef",
              ref: triggerRef,
              "data-slot": "base",
              class: ui.value.base({ class: [props.ui?.base, props.class] })
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
                    _push3(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "leading", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => {
                      if (unref(isLeading) && unref(leadingIconName)) {
                        _push3(ssrRenderComponent(_sfc_main$d, {
                          name: unref(leadingIconName),
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                        }, null, _parent3, _scopeId2));
                      } else if (!!__props.avatar) {
                        _push3(ssrRenderComponent(_sfc_main$b, mergeProps({
                          size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                        }, __props.avatar, {
                          "data-slot": "itemLeadingAvatar",
                          class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                        }), null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  ssrRenderSlot(_ctx.$slots, "default", {
                    modelValue,
                    open,
                    ui: ui.value
                  }, () => {
                    _push3(`<!--[-->`);
                    ssrRenderList([displayValue(modelValue)], (displayedModelValue) => {
                      _push3(`<!--[-->`);
                      if (displayedModelValue !== void 0 && displayedModelValue !== null) {
                        _push3(`<span data-slot="value" class="${ssrRenderClass(ui.value.value({ class: props.ui?.value }))}"${_scopeId2}>${ssrInterpolate(displayedModelValue)}</span>`);
                      } else {
                        _push3(`<span data-slot="placeholder" class="${ssrRenderClass(ui.value.placeholder({ class: props.ui?.placeholder }))}"${_scopeId2}>${ssrInterpolate(__props.placeholder ?? " ")}</span>`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]-->`);
                  }, _push3, _parent3, _scopeId2);
                  if (unref(isTrailing) || !!slots.trailing) {
                    _push3(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "trailing", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => {
                      if (unref(trailingIconName)) {
                        _push3(ssrRenderComponent(_sfc_main$d, {
                          name: unref(trailingIconName),
                          "data-slot": "trailingIcon",
                          class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      "data-slot": "leading",
                      class: ui.value.leading({ class: props.ui?.leading })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => [
                        unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                          key: 0,
                          name: unref(leadingIconName),
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                        }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                          key: 1,
                          size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                        }, __props.avatar, {
                          "data-slot": "itemLeadingAvatar",
                          class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "default", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => [
                      (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                        return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                          displayedModelValue !== void 0 && displayedModelValue !== null ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "value",
                            class: ui.value.value({ class: props.ui?.value })
                          }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                            key: 1,
                            "data-slot": "placeholder",
                            class: ui.value.placeholder({ class: props.ui?.placeholder })
                          }, toDisplayString(__props.placeholder ?? " "), 3))
                        ], 64);
                      }), 128))
                    ]),
                    unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      "data-slot": "trailing",
                      class: ui.value.trailing({ class: props.ui?.trailing })
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        modelValue,
                        open,
                        ui: ui.value
                      }, () => [
                        unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                          key: 0,
                          name: unref(trailingIconName),
                          "data-slot": "trailingIcon",
                          class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SelectPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(SelectContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: props.ui?.content })
                  }, contentProps.value), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push4, _parent4, _scopeId3);
                        _push4(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId3}><!--[-->`);
                        ssrRenderList(groups.value, (group, groupIndex) => {
                          _push4(ssrRenderComponent(unref(SelectGroup), {
                            key: `group-${groupIndex}`,
                            "data-slot": "group",
                            class: ui.value.group({ class: props.ui?.group })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(group, (item, index) => {
                                  _push5(`<!--[-->`);
                                  if (isSelectItem(item) && item.type === "label") {
                                    _push5(ssrRenderComponent(unref(SelectLabel), {
                                      "data-slot": "label",
                                      class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else if (isSelectItem(item) && item.type === "separator") {
                                    _push5(ssrRenderComponent(unref(SelectSeparator), {
                                      "data-slot": "separator",
                                      class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(ssrRenderComponent(unref(SelectItem), {
                                      "data-slot": "item",
                                      class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                      disabled: isSelectItem(item) && item.disabled,
                                      value: isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                      onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          ssrRenderSlot(_ctx.$slots, "item", {
                                            item,
                                            index,
                                            ui: ui.value
                                          }, () => {
                                            ssrRenderSlot(_ctx.$slots, "item-leading", {
                                              item,
                                              index,
                                              ui: ui.value
                                            }, () => {
                                              if (isSelectItem(item) && item.icon) {
                                                _push6(ssrRenderComponent(_sfc_main$d, {
                                                  name: item.icon,
                                                  "data-slot": "itemLeadingIcon",
                                                  class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                                }, null, _parent6, _scopeId5));
                                              } else if (isSelectItem(item) && item.avatar) {
                                                _push6(ssrRenderComponent(_sfc_main$b, mergeProps({
                                                  size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                                }, { ref_for: true }, item.avatar, {
                                                  "data-slot": "itemLeadingAvatar",
                                                  class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                                }), null, _parent6, _scopeId5));
                                              } else if (isSelectItem(item) && item.chip) {
                                                _push6(ssrRenderComponent(_sfc_main$c, mergeProps({
                                                  size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                  inset: "",
                                                  standalone: ""
                                                }, { ref_for: true }, item.chip, {
                                                  "data-slot": "itemLeadingChip",
                                                  class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                                }), null, _parent6, _scopeId5));
                                              } else {
                                                _push6(`<!---->`);
                                              }
                                            }, _push6, _parent6, _scopeId5);
                                            _push6(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] }))}"${_scopeId5}>`);
                                            _push6(ssrRenderComponent(unref(SelectItemText), {
                                              "data-slot": "itemLabel",
                                              class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                            }, {
                                              default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  ssrRenderSlot(_ctx.$slots, "item-label", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    _push7(`${ssrInterpolate(isSelectItem(item) ? unref(get)(item, props.labelKey) : item)}`);
                                                  }, _push7, _parent7, _scopeId6);
                                                } else {
                                                  return [
                                                    renderSlot(_ctx.$slots, "item-label", {
                                                      item,
                                                      index
                                                    }, () => [
                                                      createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                            if (isSelectItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"])) {
                                              _push6(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] }))}"${_scopeId5}>`);
                                              ssrRenderSlot(_ctx.$slots, "item-description", {
                                                item,
                                                index
                                              }, () => {
                                                _push6(`${ssrInterpolate(unref(get)(item, props.descriptionKey))}`);
                                              }, _push6, _parent6, _scopeId5);
                                              _push6(`</span>`);
                                            } else {
                                              _push6(`<!---->`);
                                            }
                                            _push6(`</span><span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] }))}"${_scopeId5}>`);
                                            ssrRenderSlot(_ctx.$slots, "item-trailing", {
                                              item,
                                              index,
                                              ui: ui.value
                                            }, null, _push6, _parent6, _scopeId5);
                                            _push6(ssrRenderComponent(unref(SelectItemIndicator), { "as-child": "" }, {
                                              default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(_sfc_main$d, {
                                                    name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                    "data-slot": "itemTrailingIcon",
                                                    class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                  }, null, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(_sfc_main$d, {
                                                      name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                      "data-slot": "itemTrailingIcon",
                                                      class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                    }, null, 8, ["name", "class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                            _push6(`</span>`);
                                          }, _push6, _parent6, _scopeId5);
                                        } else {
                                          return [
                                            renderSlot(_ctx.$slots, "item", {
                                              item,
                                              index,
                                              ui: ui.value
                                            }, () => [
                                              renderSlot(_ctx.$slots, "item-leading", {
                                                item,
                                                index,
                                                ui: ui.value
                                              }, () => [
                                                isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                                  key: 0,
                                                  name: item.icon,
                                                  "data-slot": "itemLeadingIcon",
                                                  class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                                }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                                  key: 1,
                                                  size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                                }, { ref_for: true }, item.avatar, {
                                                  "data-slot": "itemLeadingAvatar",
                                                  class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                                }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                                                  key: 2,
                                                  size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                  inset: "",
                                                  standalone: ""
                                                }, { ref_for: true }, item.chip, {
                                                  "data-slot": "itemLeadingChip",
                                                  class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                              ]),
                                              createVNode("span", {
                                                "data-slot": "itemWrapper",
                                                class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
                                              }, [
                                                createVNode(unref(SelectItemText), {
                                                  "data-slot": "itemLabel",
                                                  class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                                }, {
                                                  default: withCtx(() => [
                                                    renderSlot(_ctx.$slots, "item-label", {
                                                      item,
                                                      index
                                                    }, () => [
                                                      createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"]),
                                                isSelectItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  "data-slot": "itemDescription",
                                                  class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
                                                }, [
                                                  renderSlot(_ctx.$slots, "item-description", {
                                                    item,
                                                    index
                                                  }, () => [
                                                    createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                                  ])
                                                ], 2)) : createCommentVNode("", true)
                                              ], 2),
                                              createVNode("span", {
                                                "data-slot": "itemTrailing",
                                                class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                              }, [
                                                renderSlot(_ctx.$slots, "item-trailing", {
                                                  item,
                                                  index,
                                                  ui: ui.value
                                                }),
                                                createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_sfc_main$d, {
                                                      name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                      "data-slot": "itemTrailingIcon",
                                                      class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                    }, null, 8, ["name", "class"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ], 2)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  }
                                  _push5(`<!--]-->`);
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                    return openBlock(), createBlock(Fragment, {
                                      key: `group-${groupIndex}-${index}`
                                    }, [
                                      isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                        key: 0,
                                        "data-slot": "label",
                                        class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                        key: 1,
                                        "data-slot": "separator",
                                        class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                      }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                        key: 2,
                                        "data-slot": "item",
                                        class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                        disabled: isSelectItem(item) && item.disabled,
                                        value: isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                        onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "item", {
                                            item,
                                            index,
                                            ui: ui.value
                                          }, () => [
                                            renderSlot(_ctx.$slots, "item-leading", {
                                              item,
                                              index,
                                              ui: ui.value
                                            }, () => [
                                              isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                                key: 0,
                                                name: item.icon,
                                                "data-slot": "itemLeadingIcon",
                                                class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                              }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                                key: 1,
                                                size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                              }, { ref_for: true }, item.avatar, {
                                                "data-slot": "itemLeadingAvatar",
                                                class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                              }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                                                key: 2,
                                                size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                inset: "",
                                                standalone: ""
                                              }, { ref_for: true }, item.chip, {
                                                "data-slot": "itemLeadingChip",
                                                class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                            ]),
                                            createVNode("span", {
                                              "data-slot": "itemWrapper",
                                              class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
                                            }, [
                                              createVNode(unref(SelectItemText), {
                                                "data-slot": "itemLabel",
                                                class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item-label", {
                                                    item,
                                                    index
                                                  }, () => [
                                                    createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["class"]),
                                              isSelectItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                "data-slot": "itemDescription",
                                                class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
                                              }, [
                                                renderSlot(_ctx.$slots, "item-description", {
                                                  item,
                                                  index
                                                }, () => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                                ])
                                              ], 2)) : createCommentVNode("", true)
                                            ], 2),
                                            createVNode("span", {
                                              "data-slot": "itemTrailing",
                                              class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                            }, [
                                              renderSlot(_ctx.$slots, "item-trailing", {
                                                item,
                                                index,
                                                ui: ui.value
                                              }),
                                              createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_sfc_main$d, {
                                                    name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                    "data-slot": "itemTrailingIcon",
                                                    class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                  }, null, 8, ["name", "class"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ], 2)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["class", "disabled", "value", "onSelect"]))
                                    ], 64);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                        ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push4, _parent4, _scopeId3);
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(SelectArrow), mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "content-top"),
                          createVNode("div", {
                            ref_key: "viewportRef",
                            ref: viewportRef,
                            role: "presentation",
                            "data-slot": "viewport",
                            class: ui.value.viewport({ class: props.ui?.viewport })
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                              return openBlock(), createBlock(unref(SelectGroup), {
                                key: `group-${groupIndex}`,
                                "data-slot": "group",
                                class: ui.value.group({ class: props.ui?.group })
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                    return openBlock(), createBlock(Fragment, {
                                      key: `group-${groupIndex}-${index}`
                                    }, [
                                      isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                        key: 0,
                                        "data-slot": "label",
                                        class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                        key: 1,
                                        "data-slot": "separator",
                                        class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                      }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                        key: 2,
                                        "data-slot": "item",
                                        class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                        disabled: isSelectItem(item) && item.disabled,
                                        value: isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                        onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "item", {
                                            item,
                                            index,
                                            ui: ui.value
                                          }, () => [
                                            renderSlot(_ctx.$slots, "item-leading", {
                                              item,
                                              index,
                                              ui: ui.value
                                            }, () => [
                                              isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                                key: 0,
                                                name: item.icon,
                                                "data-slot": "itemLeadingIcon",
                                                class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                              }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                                key: 1,
                                                size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                              }, { ref_for: true }, item.avatar, {
                                                "data-slot": "itemLeadingAvatar",
                                                class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                              }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                                                key: 2,
                                                size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                inset: "",
                                                standalone: ""
                                              }, { ref_for: true }, item.chip, {
                                                "data-slot": "itemLeadingChip",
                                                class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                            ]),
                                            createVNode("span", {
                                              "data-slot": "itemWrapper",
                                              class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
                                            }, [
                                              createVNode(unref(SelectItemText), {
                                                "data-slot": "itemLabel",
                                                class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "item-label", {
                                                    item,
                                                    index
                                                  }, () => [
                                                    createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["class"]),
                                              isSelectItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                "data-slot": "itemDescription",
                                                class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
                                              }, [
                                                renderSlot(_ctx.$slots, "item-description", {
                                                  item,
                                                  index
                                                }, () => [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                                ])
                                              ], 2)) : createCommentVNode("", true)
                                            ], 2),
                                            createVNode("span", {
                                              "data-slot": "itemTrailing",
                                              class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                            }, [
                                              renderSlot(_ctx.$slots, "item-trailing", {
                                                item,
                                                index,
                                                ui: ui.value
                                              }),
                                              createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_sfc_main$d, {
                                                    name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                    "data-slot": "itemTrailingIcon",
                                                    class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                  }, null, 8, ["name", "class"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ], 2)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["class", "disabled", "value", "onSelect"]))
                                    ], 64);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128))
                          ], 2),
                          renderSlot(_ctx.$slots, "content-bottom"),
                          !!__props.arrow ? (openBlock(), createBlock(unref(SelectArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(SelectContent), mergeProps({
                      "data-slot": "content",
                      class: ui.value.content({ class: props.ui?.content })
                    }, contentProps.value), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "content-top"),
                        createVNode("div", {
                          ref_key: "viewportRef",
                          ref: viewportRef,
                          role: "presentation",
                          "data-slot": "viewport",
                          class: ui.value.viewport({ class: props.ui?.viewport })
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                            return openBlock(), createBlock(unref(SelectGroup), {
                              key: `group-${groupIndex}`,
                              "data-slot": "group",
                              class: ui.value.group({ class: props.ui?.group })
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: `group-${groupIndex}-${index}`
                                  }, [
                                    isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                      key: 0,
                                      "data-slot": "label",
                                      class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                      key: 1,
                                      "data-slot": "separator",
                                      class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                    }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                      key: 2,
                                      "data-slot": "item",
                                      class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                      disabled: isSelectItem(item) && item.disabled,
                                      value: isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                      onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "item", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => [
                                          renderSlot(_ctx.$slots, "item-leading", {
                                            item,
                                            index,
                                            ui: ui.value
                                          }, () => [
                                            isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                              key: 0,
                                              name: item.icon,
                                              "data-slot": "itemLeadingIcon",
                                              class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                            }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                              key: 1,
                                              size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                            }, { ref_for: true }, item.avatar, {
                                              "data-slot": "itemLeadingAvatar",
                                              class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                            }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                                              key: 2,
                                              size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                              inset: "",
                                              standalone: ""
                                            }, { ref_for: true }, item.chip, {
                                              "data-slot": "itemLeadingChip",
                                              class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                            }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                          ]),
                                          createVNode("span", {
                                            "data-slot": "itemWrapper",
                                            class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
                                          }, [
                                            createVNode(unref(SelectItemText), {
                                              "data-slot": "itemLabel",
                                              class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "item-label", {
                                                  item,
                                                  index
                                                }, () => [
                                                  createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["class"]),
                                            isSelectItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              "data-slot": "itemDescription",
                                              class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
                                            }, [
                                              renderSlot(_ctx.$slots, "item-description", {
                                                item,
                                                index
                                              }, () => [
                                                createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                              ])
                                            ], 2)) : createCommentVNode("", true)
                                          ], 2),
                                          createVNode("span", {
                                            "data-slot": "itemTrailing",
                                            class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                          }, [
                                            renderSlot(_ctx.$slots, "item-trailing", {
                                              item,
                                              index,
                                              ui: ui.value
                                            }),
                                            createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_sfc_main$d, {
                                                  name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                  "data-slot": "itemTrailingIcon",
                                                  class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                }, null, 8, ["name", "class"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 2)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "disabled", "value", "onSelect"]))
                                  ], 64);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ], 2),
                        renderSlot(_ctx.$slots, "content-bottom"),
                        !!__props.arrow ? (openBlock(), createBlock(unref(SelectArrow), mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: props.ui?.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SelectTrigger), mergeProps({
                id: unref(id),
                ref_key: "triggerRef",
                ref: triggerRef,
                "data-slot": "base",
                class: ui.value.base({ class: [props.ui?.base, props.class] })
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), {
                default: withCtx(() => [
                  unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    "data-slot": "leading",
                    class: ui.value.leading({ class: props.ui?.leading })
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => [
                      unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                        key: 0,
                        name: unref(leadingIconName),
                        "data-slot": "leadingIcon",
                        class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                      }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                        key: 1,
                        size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                      }, __props.avatar, {
                        "data-slot": "itemLeadingAvatar",
                        class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "default", {
                    modelValue,
                    open,
                    ui: ui.value
                  }, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                      return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                        displayedModelValue !== void 0 && displayedModelValue !== null ? (openBlock(), createBlock("span", {
                          key: 0,
                          "data-slot": "value",
                          class: ui.value.value({ class: props.ui?.value })
                        }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                          key: 1,
                          "data-slot": "placeholder",
                          class: ui.value.placeholder({ class: props.ui?.placeholder })
                        }, toDisplayString(__props.placeholder ?? " "), 3))
                      ], 64);
                    }), 128))
                  ]),
                  unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    "data-slot": "trailing",
                    class: ui.value.trailing({ class: props.ui?.trailing })
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      modelValue,
                      open,
                      ui: ui.value
                    }, () => [
                      unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                        key: 0,
                        name: unref(trailingIconName),
                        "data-slot": "trailingIcon",
                        class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1040, ["id", "class"]),
              createVNode(unref(SelectPortal), unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(SelectContent), mergeProps({
                    "data-slot": "content",
                    class: ui.value.content({ class: props.ui?.content })
                  }, contentProps.value), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "content-top"),
                      createVNode("div", {
                        ref_key: "viewportRef",
                        ref: viewportRef,
                        role: "presentation",
                        "data-slot": "viewport",
                        class: ui.value.viewport({ class: props.ui?.viewport })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                          return openBlock(), createBlock(unref(SelectGroup), {
                            key: `group-${groupIndex}`,
                            "data-slot": "group",
                            class: ui.value.group({ class: props.ui?.group })
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                return openBlock(), createBlock(Fragment, {
                                  key: `group-${groupIndex}-${index}`
                                }, [
                                  isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel), {
                                    key: 0,
                                    "data-slot": "label",
                                    class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator), {
                                    key: 1,
                                    "data-slot": "separator",
                                    class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                  }, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem), {
                                    key: 2,
                                    "data-slot": "item",
                                    class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                    disabled: isSelectItem(item) && item.disabled,
                                    value: isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                    onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "item", {
                                        item,
                                        index,
                                        ui: ui.value
                                      }, () => [
                                        renderSlot(_ctx.$slots, "item-leading", {
                                          item,
                                          index,
                                          ui: ui.value
                                        }, () => [
                                          isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$d, {
                                            key: 0,
                                            name: item.icon,
                                            "data-slot": "itemLeadingIcon",
                                            class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                          }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                                            key: 1,
                                            size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                          }, { ref_for: true }, item.avatar, {
                                            "data-slot": "itemLeadingAvatar",
                                            class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                          }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$c, mergeProps({
                                            key: 2,
                                            size: item.ui?.itemLeadingChipSize || props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                            inset: "",
                                            standalone: ""
                                          }, { ref_for: true }, item.chip, {
                                            "data-slot": "itemLeadingChip",
                                            class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                        ]),
                                        createVNode("span", {
                                          "data-slot": "itemWrapper",
                                          class: ui.value.itemWrapper({ class: [props.ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
                                        }, [
                                          createVNode(unref(SelectItemText), {
                                            "data-slot": "itemLabel",
                                            class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                          }, {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, "item-label", {
                                                item,
                                                index
                                              }, () => [
                                                createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["class"]),
                                          isSelectItem(item) && (unref(get)(item, props.descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            "data-slot": "itemDescription",
                                            class: ui.value.itemDescription({ class: [props.ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
                                          }, [
                                            renderSlot(_ctx.$slots, "item-description", {
                                              item,
                                              index
                                            }, () => [
                                              createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)
                                            ])
                                          ], 2)) : createCommentVNode("", true)
                                        ], 2),
                                        createVNode("span", {
                                          "data-slot": "itemTrailing",
                                          class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                        }, [
                                          renderSlot(_ctx.$slots, "item-trailing", {
                                            item,
                                            index,
                                            ui: ui.value
                                          }),
                                          createVNode(unref(SelectItemIndicator), { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_sfc_main$d, {
                                                name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                "data-slot": "itemTrailingIcon",
                                                class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                              }, null, 8, ["name", "class"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ], 2)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "disabled", "value", "onSelect"]))
                                ], 64);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["class"]);
                        }), 128))
                      ], 2),
                      renderSlot(_ctx.$slots, "content-bottom"),
                      !!__props.arrow ? (openBlock(), createBlock(unref(SelectArrow), mergeProps({ key: 0 }, arrowProps.value, {
                        "data-slot": "arrow",
                        class: ui.value.arrow({ class: props.ui?.arrow })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 16, ["class"])
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UInput",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    type: { type: null, required: false, default: "text" },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autocomplete: { type: null, required: false, default: "off" },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelModifiers: { type: Object, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: null, required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig = useAppConfig();
    const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, emitFormFocus, ariaAttrs } = useFormField(props, { deferInputValidation: true });
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => fieldGroupSize.value || formGroupSize.value);
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.input || {} })({
      type: props.type,
      color: color.value,
      variant: props.variant,
      size: inputSize?.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      fieldGroup: orientation.value
    }));
    const inputRef = useTemplateRef("inputRef");
    function updateInput(value) {
      if (props.modelModifiers?.trim) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullable) {
        value ||= null;
      }
      if (props.modelModifiers?.optional) {
        value ||= void 0;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: __props.type,
              value: unref(modelValue),
              name: unref(name),
              placeholder: __props.placeholder,
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base }),
              disabled: unref(disabled),
              required: __props.required,
              autocomplete: __props.autocomplete
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$d, {
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$d, {
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: __props.type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: __props.placeholder,
                "data-slot": "base",
                class: ui.value.base({ class: props.ui?.base }),
                disabled: unref(disabled),
                required: __props.required,
                autocomplete: __props.autocomplete
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete", "onFocus"]),
              renderSlot(_ctx.$slots, "default", { ui: ui.value }),
              unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                "data-slot": "leading",
                class: ui.value.leading({ class: props.ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                    key: 0,
                    name: unref(leadingIconName),
                    "data-slot": "leadingIcon",
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$b, mergeProps({
                    key: 1,
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    "data-slot": "leadingAvatar",
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                "data-slot": "trailing",
                class: ui.value.trailing({ class: props.ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$d, {
                    key: 0,
                    name: unref(trailingIconName),
                    "data-slot": "trailingIcon",
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const theme = {
  "slots": {
    "root": "relative flex items-start",
    "container": "flex items-center",
    "base": "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full text-inverted",
    "icon": "shrink-0 size-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "root": ""
      },
      "card": {
        "root": "border border-muted rounded-lg"
      }
    },
    "indicator": {
      "start": {
        "root": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "root": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "size-4",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "size-4.5",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "size-5",
        "container": "h-6",
        "wrapper": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": "card",
      "class": {
        "root": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": "card",
      "class": {
        "root": "p-3"
      }
    },
    {
      "size": "md",
      "variant": "card",
      "class": {
        "root": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": "card",
      "class": {
        "root": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": "card",
      "class": {
        "root": "p-4.5"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "variant": "card",
      "disabled": true,
      "class": {
        "root": "cursor-not-allowed"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "indicator": "start"
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCheckbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    indicator: { type: null, required: false },
    icon: { type: null, required: false },
    indeterminateIcon: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    value: { type: null, required: false },
    id: { type: String, required: false },
    defaultValue: { type: [Boolean, String], required: false }
  }, {
    "modelValue": { type: [Boolean, String], ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue", { type: [Boolean, String], ...{ default: void 0 } });
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.checkbox || {} })({
      size: size.value,
      color: color.value,
      variant: props.variant,
      indicator: props.indicator,
      required: props.required,
      disabled: disabled.value
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: !__props.variant || __props.variant === "list" ? __props.as : unref(Label),
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled),
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base })
            }), {
              default: withCtx(({ modelValue: modelValue2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: props.ui?.indicator })
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (modelValue2 === "indeterminate") {
                          _push4(ssrRenderComponent(_sfc_main$d, {
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$d, {
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$d, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$d, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: props.ui?.indicator })
                    }, {
                      default: withCtx(() => [
                        modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$d, {
                          key: 0,
                          name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$d, {
                          key: 1,
                          name: __props.icon || unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                        _push3(`${ssrInterpolate(__props.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, [
                createVNode(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled),
                  "data-slot": "base",
                  class: ui.value.base({ class: props.ui?.base })
                }), {
                  default: withCtx(({ modelValue: modelValue2 }) => [
                    createVNode(unref(CheckboxIndicator), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: props.ui?.indicator })
                    }, {
                      default: withCtx(() => [
                        modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$d, {
                          key: 0,
                          name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$d, {
                          key: 1,
                          name: __props.icon || unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const POWER_TYPES_OPTIONS = [
  { label: "Л.С.", value: "ls" },
  { value: "kvt", label: "кВт" }
];
const FACE_TYPES_OPTIONS = [
  { label: "Физическое лицо", value: "nat" },
  { label: "Юридическое лицо", value: "jur" }
];
const ENGINE_TYPES_OPTIONS = [
  { label: "Бензиновый", value: "petrol" },
  { label: "Дизельный", value: "diesel" },
  { label: "Бензиновый гибрид", value: "petrol_electric" },
  { label: "Дизельный гибрид", value: "diesel_electric" },
  { label: "Электрический", value: "electric" },
  { label: "Без двигателя", value: "no_engine", disabled: true }
];
const CHASSIS_TYPES_OPTIONS = [
  { label: "Шарнирно - сочленённая", value: "shs" },
  { label: "Не шарнирно - сочленённая, 2 оси", value: "nshs" },
  { label: "Не шарнирно - сочленённая, более 2 осей", value: "nshs2" }
];
const AGE_OPTIONS = [
  { label: "меньше 3-х лет", value: "3" },
  { label: "3-5 лет", value: "35" },
  { label: "5-7 лет", value: "57" },
  { label: "больше 7 лет", value: "7" }
];
const TS_TYPES_OPTIONS = [
  { label: "Автомобиль", value: "00_8703" },
  { label: "Пикап", value: "00_8704" },
  { label: "Квадроцикл", value: "01_8703" },
  { label: "Гольф-кар", value: "02_8703" },
  { label: "Снегоход", value: "03_8703101100" },
  { label: "Грузовик", value: "04_8704" },
  { label: "Самосвал", value: "05_870410" },
  { label: "Мотоцикл", value: "06_8711" },
  { label: "Мотороллер", value: "07_8711201000" },
  { label: "Мопед", value: "08_8711100000" },
  { label: "Автоприцеп", value: "09_8716400000" },
  { label: "Дом-автоприцеп", value: "10_871610" },
  { label: "Водный мотоцикл", value: "11_890399" },
  { label: "Катер (яхта, лодка)", value: "12_8903" },
  { label: "Автобус", value: "13_8702" }
];
const CURRENCY_OPTIONS = [
  { label: "RUB", value: "643" },
  { label: "USD", value: "840" },
  { label: "EUR", value: "978" },
  { label: "CNY", value: "156" },
  { label: "KRW", value: "410" }
];
const BUS_CAPACITY_OPTIONS = [
  { label: "Более 120 человек", value: "gt120" },
  { label: "Менее 120 человек", value: "lt120" }
];
const BUS_ECO_CLASS_OPTIONS = [
  { label: "экологического класса 5, с мощностью двигателя более 308 кВт, габаритной длиной более 13 м, имеющие более 55 посадочных мест, включая водителя, объем багажного отсека более 12 м3", value: "lt120_ec5" },
  { label: "прочие экологического класса 4 или выше, габаритной длиной не менее 11,5 м, имеющие не менее 41 посадочного места, включая водителя, объем багажного отсека не менее 5 м3 и предназначенные для перевозки только сидящих пассажиров и их багажа", value: "lt120_ec4" }
];
const CURRENCY_OPTIONS_MAP = CURRENCY_OPTIONS.reduce((acc, cur) => ({ ...acc, [cur.value]: cur.label }), {});
const AGE_OPTIONS_MAP = AGE_OPTIONS.reduce((acc, cur) => ({ ...acc, [cur.value]: cur.label }), {});
const POWER_TYPES_MAP = POWER_TYPES_OPTIONS.reduce((acc, cur) => ({ ...acc, [cur.value]: cur.label }), {});
const ENGINE_TYPES_MAP = ENGINE_TYPES_OPTIONS.reduce((acc, cur) => ({ ...acc, [cur.value]: cur.label }), {});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    isLoading: { type: Boolean }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const initialState = {
      face: "nat",
      // nat, jur
      cost: "",
      currency: "643",
      age: "3",
      //3, 35, 57, 7
      power: "",
      power_edizm: "ls",
      // kvt, ls
      volume: "",
      engine_type: "petrol",
      // petrol, diesel, petrol_electric, diesel_electric, electric, no_engine
      mass: "",
      offroad: false,
      // Повышенной проходимости (для ts_type=00_8703)
      caravan: false,
      // Автодом (для ts_type=00_8703)
      ts_type: "00_8703"
      //00_8703 - автомобиль, 00_8704 - пикап, 01_8703 - квадроцикл, 02_8703 - гольф-кар, 03_8703101100 - снегоход, 04_8704 - грузовик, 05_870410 - самосвал, 06_8711 - мотоцикл, 07_8711201000 - мотороллер, 08_8711100000 - мопед, 09_8716400000 - автоприцеп, 10_871610 - дом-автоприцеп, 11_890399 - водный мотоцикл, 12_8903 - катер (яхта, лодка), 13_8702 - автобус
    };
    const formState = reactive({ ...initialState });
    const formRef = ref();
    const onSubmit = (event) => {
      emits("submit", event.data);
    };
    function onReset() {
      formRef.value.clear();
      Object.assign(formState, initialState);
    }
    const costMask = reactive({
      mask: "### ### ###",
      reversed: true
    });
    const volumeMask = reactive({
      mask: "## ###",
      reversed: true
    });
    const powerMask = reactive({
      mask: "# ###",
      reversed: true
    });
    const massMask = reactive({
      mask: "###",
      reversed: true
    });
    watch(() => formState.ts_type, () => {
      Object.assign(formState, { ...initialState, ts_type: formState.ts_type });
      formRef.value.clear();
    });
    watch(() => formState.ts_type, () => {
      if (formState.ts_type !== "00_8703") {
        Object.assign(formState, { ...formState, face: "jur" });
      }
      if (formState.ts_type === "09_8716400000" || formState.ts_type === "10_871610") {
        Object.assign(formState, { ...formState, engine_type: "no_engine" });
      } else {
        Object.assign(formState, { ...formState, engine_type: "petrol" });
      }
      if (formState.ts_type === "13_8702") {
        Object.assign(formState, { ...formState, buscap: "gt120" });
      } else {
        Object.assign(formState, { ...formState, buscap: void 0 });
      }
    });
    watch(() => formState.engine_type, () => {
      if (formState.engine_type !== "diesel_electric" && formState.engine_type !== "petrol_electric") {
        Object.assign(formState, { ...formState, mdvs_gt_m30ed: false, sequential: false });
      }
    });
    watch(() => formState.offroad, (newValue) => {
      if (newValue === true) {
        Object.assign(formState, { ...formState, caravan: false });
      }
    });
    watch(() => formState.caravan, (newValue) => {
      if (newValue === true) {
        Object.assign(formState, { ...formState, offroad: false });
      }
    });
    const isEngineTypeDisabled = computed(() => {
      if (formState.ts_type === "09_8716400000" || formState.ts_type === "10_871610") {
        Object.assign(formState, { ...formState, engine_type: "no_engine" });
        return true;
      } else {
        return false;
      }
    });
    const isMassInputDisabled = computed(() => {
      if (formState.ts_type === "01_8703" || formState.ts_type === "04_8704" || formState.ts_type === "00_8704" || formState.ts_type === "05_870410") {
        return false;
      } else {
        return true;
      }
    });
    const isVolumeDisabled = computed(() => {
      if (formState.ts_type === "09_8716400000" || formState.ts_type === "10_871610" || formState.ts_type === "11_890399" || formState.ts_type === "12_8903" || formState.engine_type === "no_engine" || formState.engine_type === "electric") {
        return true;
      } else {
        return false;
      }
    });
    const isPowerDisabled = computed(() => {
      if (formState.ts_type === "09_8716400000" || formState.ts_type === "10_871610" || formState.ts_type === "11_890399" || formState.ts_type === "12_8903" || formState.ts_type === "13_8702") {
        return true;
      } else {
        return false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$8;
      const _component_UFormField = _sfc_main$7;
      const _component_URadioGroup = _sfc_main$6;
      const _component_USelect = _sfc_main$5;
      const _component_UInput = _sfc_main$4;
      const _component_UCheckbox = _sfc_main$3;
      const _component_UButton = _sfc_main$8$1;
      _push(ssrRenderComponent(_component_UForm, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        class: "form",
        state: unref(formState),
        "validate-on": ["change", "blur", "input"],
        disabled: props.isLoading,
        onSubmit,
        onReset
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="calculator-container" data-v-eac3497b${_scopeId}><div class="calculator-row" data-v-eac3497b${_scopeId}>`);
            if (unref(formState).ts_type === "00_8703") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Расчитать для:",
                size: "lg",
                name: "face"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_URadioGroup, {
                      modelValue: unref(formState).face,
                      "onUpdate:modelValue": ($event) => unref(formState).face = $event,
                      size: "xs",
                      variant: "table",
                      orientation: "horizontal",
                      items: unref(FACE_TYPES_OPTIONS)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_URadioGroup, {
                        modelValue: unref(formState).face,
                        "onUpdate:modelValue": ($event) => unref(formState).face = $event,
                        size: "xs",
                        variant: "table",
                        orientation: "horizontal",
                        items: unref(FACE_TYPES_OPTIONS)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              label: "Тип ТС",
              size: "lg",
              name: "age"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(formState).ts_type,
                    "onUpdate:modelValue": ($event) => unref(formState).ts_type = $event,
                    variant: "outline",
                    ui: { content: "min-w-fit" },
                    arrow: "",
                    items: unref(TS_TYPES_OPTIONS),
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(formState).ts_type,
                      "onUpdate:modelValue": ($event) => unref(formState).ts_type = $event,
                      variant: "outline",
                      ui: { content: "min-w-fit" },
                      arrow: "",
                      items: unref(TS_TYPES_OPTIONS),
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              label: "Возраст ТС",
              size: "lg",
              name: "age"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(formState).age,
                    "onUpdate:modelValue": ($event) => unref(formState).age = $event,
                    arrow: "",
                    items: unref(AGE_OPTIONS),
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(formState).age,
                      "onUpdate:modelValue": ($event) => unref(formState).age = $event,
                      arrow: "",
                      items: unref(AGE_OPTIONS),
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="calculator-row" data-v-eac3497b${_scopeId}><div class="cost-input" data-v-eac3497b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              required: "",
              label: "Стоймость",
              name: "price",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, mergeProps({
                    modelValue: unref(formState).cost,
                    "onUpdate:modelValue": ($event) => unref(formState).cost = $event,
                    required: "",
                    variant: "outline",
                    min: "1",
                    class: "text-md w-full"
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska), unref(costMask))), null, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(_component_UInput, {
                      modelValue: unref(formState).cost,
                      "onUpdate:modelValue": ($event) => unref(formState).cost = $event,
                      required: "",
                      variant: "outline",
                      min: "1",
                      class: "text-md w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [unref(vMaska), unref(costMask)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              label: "",
              size: "lg",
              name: "currency"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(formState).currency,
                    "onUpdate:modelValue": ($event) => unref(formState).currency = $event,
                    required: "",
                    arrow: "",
                    items: unref(CURRENCY_OPTIONS)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(formState).currency,
                      "onUpdate:modelValue": ($event) => unref(formState).currency = $event,
                      required: "",
                      arrow: "",
                      items: unref(CURRENCY_OPTIONS)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              required: !unref(isVolumeDisabled),
              label: "Объем двигателя, см3",
              size: "lg",
              name: "volume"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, mergeProps({
                    modelValue: unref(formState).volume,
                    "onUpdate:modelValue": ($event) => unref(formState).volume = $event,
                    required: !unref(isVolumeDisabled),
                    disabled: unref(isVolumeDisabled),
                    class: "text-md w-full"
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska), unref(volumeMask))), null, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(_component_UInput, {
                      modelValue: unref(formState).volume,
                      "onUpdate:modelValue": ($event) => unref(formState).volume = $event,
                      required: !unref(isVolumeDisabled),
                      disabled: unref(isVolumeDisabled),
                      class: "text-md w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "required", "disabled"]), [
                      [unref(vMaska), unref(volumeMask)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              label: "Тип двигателя",
              size: "lg",
              name: "engineType",
              disabled: unref(isEngineTypeDisabled)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(formState).engine_type,
                    "onUpdate:modelValue": ($event) => unref(formState).engine_type = $event,
                    ui: { content: "min-w-fit" },
                    arrow: "",
                    items: unref(ENGINE_TYPES_OPTIONS),
                    class: "w-full",
                    disabled: unref(isEngineTypeDisabled)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(formState).engine_type,
                      "onUpdate:modelValue": ($event) => unref(formState).engine_type = $event,
                      ui: { content: "min-w-fit" },
                      arrow: "",
                      items: unref(ENGINE_TYPES_OPTIONS),
                      class: "w-full",
                      disabled: unref(isEngineTypeDisabled)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="calculator-row" data-v-eac3497b${_scopeId}><div class="power-input" data-v-eac3497b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              required: !unref(isPowerDisabled),
              label: "Мощность",
              size: "lg",
              name: "power",
              disabled: unref(isPowerDisabled)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, mergeProps({
                    modelValue: unref(formState).power,
                    "onUpdate:modelValue": ($event) => unref(formState).power = $event,
                    class: "text-md w-full",
                    disabled: unref(isPowerDisabled),
                    required: !unref(isPowerDisabled)
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska), unref(powerMask))), null, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(_component_UInput, {
                      modelValue: unref(formState).power,
                      "onUpdate:modelValue": ($event) => unref(formState).power = $event,
                      class: "text-md w-full",
                      disabled: unref(isPowerDisabled),
                      required: !unref(isPowerDisabled)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "required"]), [
                      [unref(vMaska), unref(powerMask)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="power-type" data-v-eac3497b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              name: "powerType",
              disabled: unref(isPowerDisabled)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_URadioGroup, {
                    modelValue: unref(formState).power_edizm,
                    "onUpdate:modelValue": ($event) => unref(formState).power_edizm = $event,
                    orientation: "horizontal",
                    disabled: unref(isPowerDisabled),
                    size: "xs",
                    variant: "table",
                    items: unref(POWER_TYPES_OPTIONS)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_URadioGroup, {
                      modelValue: unref(formState).power_edizm,
                      "onUpdate:modelValue": ($event) => unref(formState).power_edizm = $event,
                      orientation: "horizontal",
                      disabled: unref(isPowerDisabled),
                      size: "xs",
                      variant: "table",
                      items: unref(POWER_TYPES_OPTIONS)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              class: "text-md",
              label: "Масса, тонн",
              size: "lg",
              name: "mass",
              disabled: unref(isMassInputDisabled)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, mergeProps({
                    modelValue: unref(formState).mass,
                    "onUpdate:modelValue": ($event) => unref(formState).mass = $event,
                    class: "text-md w-full",
                    disabled: unref(isMassInputDisabled)
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska), unref(massMask))), null, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(_component_UInput, {
                      modelValue: unref(formState).mass,
                      "onUpdate:modelValue": ($event) => unref(formState).mass = $event,
                      class: "text-md w-full",
                      disabled: unref(isMassInputDisabled)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]), [
                      [unref(vMaska), unref(massMask)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="calculator-row" data-v-eac3497b${_scopeId}>`);
            if (unref(formState).ts_type === "00_8703") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Повышенной проходимости",
                size: "lg",
                name: "offroad"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: unref(formState).offroad,
                      "onUpdate:modelValue": ($event) => unref(formState).offroad = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).offroad,
                        "onUpdate:modelValue": ($event) => unref(formState).offroad = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(formState).ts_type === "00_8703") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Автодом",
                size: "lg",
                name: "caravan"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: unref(formState).caravan,
                      "onUpdate:modelValue": ($event) => unref(formState).caravan = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).caravan,
                        "onUpdate:modelValue": ($event) => unref(formState).caravan = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(formState).ts_type === "04_8704") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Тип 'Форвардер'",
                size: "lg",
                name: "forwarder"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: unref(formState).forwarder,
                      "onUpdate:modelValue": ($event) => unref(formState).forwarder = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).forwarder,
                        "onUpdate:modelValue": ($event) => unref(formState).forwarder = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(formState).ts_type === "05_870410") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Рама",
                size: "lg",
                name: "chassis"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_URadioGroup, {
                      modelValue: unref(formState).chassis,
                      "onUpdate:modelValue": ($event) => unref(formState).chassis = $event,
                      size: "xs",
                      variant: "table",
                      orientation: "horizontal",
                      items: unref(CHASSIS_TYPES_OPTIONS)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_URadioGroup, {
                        modelValue: unref(formState).chassis,
                        "onUpdate:modelValue": ($event) => unref(formState).chassis = $event,
                        size: "xs",
                        variant: "table",
                        orientation: "horizontal",
                        items: unref(CHASSIS_TYPES_OPTIONS)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(formState).ts_type === "12_8903") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Морского класса",
                size: "lg",
                name: "boat_sea"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: unref(formState).boat_sea,
                      "onUpdate:modelValue": ($event) => unref(formState).boat_sea = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).boat_sea,
                        "onUpdate:modelValue": ($event) => unref(formState).boat_sea = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(formState).engine_type === "diesel_electric" || unref(formState).engine_type === "petrol_electric") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Мощность ДВС больше максимальной 30-минутной мощности ЭД",
                size: "lg",
                name: "boat_sea"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: unref(formState).mdvs_gt_m30ed,
                      "onUpdate:modelValue": ($event) => unref(formState).mdvs_gt_m30ed = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).mdvs_gt_m30ed,
                        "onUpdate:modelValue": ($event) => unref(formState).mdvs_gt_m30ed = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(formState).engine_type === "diesel_electric" || unref(formState).engine_type === "petrol_electric") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Силовая установка последовательного типа",
                size: "lg",
                name: "sequential"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: unref(formState).sequential,
                      "onUpdate:modelValue": ($event) => unref(formState).sequential = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).sequential,
                        "onUpdate:modelValue": ($event) => unref(formState).sequential = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(formState).ts_type === "13_8702") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Вместимость",
                size: "lg",
                name: "chassis"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_URadioGroup, {
                      modelValue: unref(formState).buscap,
                      "onUpdate:modelValue": ($event) => unref(formState).buscap = $event,
                      size: "xs",
                      variant: "table",
                      orientation: "horizontal",
                      items: unref(BUS_CAPACITY_OPTIONS)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_URadioGroup, {
                        modelValue: unref(formState).buscap,
                        "onUpdate:modelValue": ($event) => unref(formState).buscap = $event,
                        size: "xs",
                        variant: "table",
                        orientation: "horizontal",
                        items: unref(BUS_CAPACITY_OPTIONS)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="bus-eco-class" data-v-eac3497b${_scopeId}>`);
            if (unref(formState).ts_type === "13_8702") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Для осуществления перевозок по межмуниципальным, смежным межрегиональным, межрегиональным и международным маршрутам регулярных перевозок",
                size: "lg",
                name: "bus_municipal_cb"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UCheckbox, {
                      modelValue: unref(formState).bus_municipal_cb,
                      "onUpdate:modelValue": ($event) => unref(formState).bus_municipal_cb = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).bus_municipal_cb,
                        "onUpdate:modelValue": ($event) => unref(formState).bus_municipal_cb = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(formState).ts_type === "13_8702") {
              _push2(ssrRenderComponent(_component_UFormField, {
                class: "text-md",
                label: "Эк. класс",
                size: "lg",
                name: "chassis"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_URadioGroup, {
                      modelValue: unref(formState).buscap,
                      "onUpdate:modelValue": ($event) => unref(formState).buscap = $event,
                      size: "xs",
                      variant: "table",
                      orientation: "vertical",
                      items: unref(BUS_ECO_CLASS_OPTIONS)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_URadioGroup, {
                        modelValue: unref(formState).buscap,
                        "onUpdate:modelValue": ($event) => unref(formState).buscap = $event,
                        size: "xs",
                        variant: "table",
                        orientation: "vertical",
                        items: unref(BUS_ECO_CLASS_OPTIONS)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="actions" data-v-eac3497b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              loading: props.isLoading,
              type: "submit",
              variant: "solid",
              label: "Расчитать",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: props.isLoading,
              type: "reset",
              variant: "outline",
              label: "Сбросить",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "calculator-container" }, [
                createVNode("div", { class: "calculator-row" }, [
                  unref(formState).ts_type === "00_8703" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 0,
                    class: "text-md",
                    label: "Расчитать для:",
                    size: "lg",
                    name: "face"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_URadioGroup, {
                        modelValue: unref(formState).face,
                        "onUpdate:modelValue": ($event) => unref(formState).face = $event,
                        size: "xs",
                        variant: "table",
                        orientation: "horizontal",
                        items: unref(FACE_TYPES_OPTIONS)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_UFormField, {
                    class: "text-md",
                    label: "Тип ТС",
                    size: "lg",
                    name: "age"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: unref(formState).ts_type,
                        "onUpdate:modelValue": ($event) => unref(formState).ts_type = $event,
                        variant: "outline",
                        ui: { content: "min-w-fit" },
                        arrow: "",
                        items: unref(TS_TYPES_OPTIONS),
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    class: "text-md",
                    label: "Возраст ТС",
                    size: "lg",
                    name: "age"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: unref(formState).age,
                        "onUpdate:modelValue": ($event) => unref(formState).age = $event,
                        arrow: "",
                        items: unref(AGE_OPTIONS),
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "calculator-row" }, [
                  createVNode("div", { class: "cost-input" }, [
                    createVNode(_component_UFormField, {
                      class: "text-md",
                      required: "",
                      label: "Стоймость",
                      name: "price",
                      size: "lg"
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_UInput, {
                          modelValue: unref(formState).cost,
                          "onUpdate:modelValue": ($event) => unref(formState).cost = $event,
                          required: "",
                          variant: "outline",
                          min: "1",
                          class: "text-md w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                          [unref(vMaska), unref(costMask)]
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      class: "text-md",
                      label: "",
                      size: "lg",
                      name: "currency"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: unref(formState).currency,
                          "onUpdate:modelValue": ($event) => unref(formState).currency = $event,
                          required: "",
                          arrow: "",
                          items: unref(CURRENCY_OPTIONS)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UFormField, {
                    class: "text-md",
                    required: !unref(isVolumeDisabled),
                    label: "Объем двигателя, см3",
                    size: "lg",
                    name: "volume"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(_component_UInput, {
                        modelValue: unref(formState).volume,
                        "onUpdate:modelValue": ($event) => unref(formState).volume = $event,
                        required: !unref(isVolumeDisabled),
                        disabled: unref(isVolumeDisabled),
                        class: "text-md w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "required", "disabled"]), [
                        [unref(vMaska), unref(volumeMask)]
                      ])
                    ]),
                    _: 1
                  }, 8, ["required"]),
                  createVNode(_component_UFormField, {
                    class: "text-md",
                    label: "Тип двигателя",
                    size: "lg",
                    name: "engineType",
                    disabled: unref(isEngineTypeDisabled)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: unref(formState).engine_type,
                        "onUpdate:modelValue": ($event) => unref(formState).engine_type = $event,
                        ui: { content: "min-w-fit" },
                        arrow: "",
                        items: unref(ENGINE_TYPES_OPTIONS),
                        class: "w-full",
                        disabled: unref(isEngineTypeDisabled)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled"])
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                createVNode("div", { class: "calculator-row" }, [
                  createVNode("div", { class: "power-input" }, [
                    createVNode(_component_UFormField, {
                      class: "text-md",
                      required: !unref(isPowerDisabled),
                      label: "Мощность",
                      size: "lg",
                      name: "power",
                      disabled: unref(isPowerDisabled)
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_UInput, {
                          modelValue: unref(formState).power,
                          "onUpdate:modelValue": ($event) => unref(formState).power = $event,
                          class: "text-md w-full",
                          disabled: unref(isPowerDisabled),
                          required: !unref(isPowerDisabled)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "required"]), [
                          [unref(vMaska), unref(powerMask)]
                        ])
                      ]),
                      _: 1
                    }, 8, ["required", "disabled"]),
                    createVNode("div", { class: "power-type" }, [
                      createVNode(_component_UFormField, {
                        class: "text-md",
                        name: "powerType",
                        disabled: unref(isPowerDisabled)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_URadioGroup, {
                            modelValue: unref(formState).power_edizm,
                            "onUpdate:modelValue": ($event) => unref(formState).power_edizm = $event,
                            orientation: "horizontal",
                            disabled: unref(isPowerDisabled),
                            size: "xs",
                            variant: "table",
                            items: unref(POWER_TYPES_OPTIONS)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ]),
                  createVNode(_component_UFormField, {
                    class: "text-md",
                    label: "Масса, тонн",
                    size: "lg",
                    name: "mass",
                    disabled: unref(isMassInputDisabled)
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(_component_UInput, {
                        modelValue: unref(formState).mass,
                        "onUpdate:modelValue": ($event) => unref(formState).mass = $event,
                        class: "text-md w-full",
                        disabled: unref(isMassInputDisabled)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]), [
                        [unref(vMaska), unref(massMask)]
                      ])
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                createVNode("div", { class: "calculator-row" }, [
                  unref(formState).ts_type === "00_8703" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 0,
                    class: "text-md",
                    label: "Повышенной проходимости",
                    size: "lg",
                    name: "offroad"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).offroad,
                        "onUpdate:modelValue": ($event) => unref(formState).offroad = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formState).ts_type === "00_8703" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 1,
                    class: "text-md",
                    label: "Автодом",
                    size: "lg",
                    name: "caravan"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).caravan,
                        "onUpdate:modelValue": ($event) => unref(formState).caravan = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formState).ts_type === "04_8704" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 2,
                    class: "text-md",
                    label: "Тип 'Форвардер'",
                    size: "lg",
                    name: "forwarder"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).forwarder,
                        "onUpdate:modelValue": ($event) => unref(formState).forwarder = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formState).ts_type === "05_870410" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 3,
                    class: "text-md",
                    label: "Рама",
                    size: "lg",
                    name: "chassis"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_URadioGroup, {
                        modelValue: unref(formState).chassis,
                        "onUpdate:modelValue": ($event) => unref(formState).chassis = $event,
                        size: "xs",
                        variant: "table",
                        orientation: "horizontal",
                        items: unref(CHASSIS_TYPES_OPTIONS)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formState).ts_type === "12_8903" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 4,
                    class: "text-md",
                    label: "Морского класса",
                    size: "lg",
                    name: "boat_sea"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).boat_sea,
                        "onUpdate:modelValue": ($event) => unref(formState).boat_sea = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formState).engine_type === "diesel_electric" || unref(formState).engine_type === "petrol_electric" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 5,
                    class: "text-md",
                    label: "Мощность ДВС больше максимальной 30-минутной мощности ЭД",
                    size: "lg",
                    name: "boat_sea"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).mdvs_gt_m30ed,
                        "onUpdate:modelValue": ($event) => unref(formState).mdvs_gt_m30ed = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formState).engine_type === "diesel_electric" || unref(formState).engine_type === "petrol_electric" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 6,
                    class: "text-md",
                    label: "Силовая установка последовательного типа",
                    size: "lg",
                    name: "sequential"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).sequential,
                        "onUpdate:modelValue": ($event) => unref(formState).sequential = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formState).ts_type === "13_8702" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 7,
                    class: "text-md",
                    label: "Вместимость",
                    size: "lg",
                    name: "chassis"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_URadioGroup, {
                        modelValue: unref(formState).buscap,
                        "onUpdate:modelValue": ($event) => unref(formState).buscap = $event,
                        size: "xs",
                        variant: "table",
                        orientation: "horizontal",
                        items: unref(BUS_CAPACITY_OPTIONS)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "bus-eco-class" }, [
                  unref(formState).ts_type === "13_8702" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 0,
                    class: "text-md",
                    label: "Для осуществления перевозок по межмуниципальным, смежным межрегиональным, межрегиональным и международным маршрутам регулярных перевозок",
                    size: "lg",
                    name: "bus_municipal_cb"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UCheckbox, {
                        modelValue: unref(formState).bus_municipal_cb,
                        "onUpdate:modelValue": ($event) => unref(formState).bus_municipal_cb = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(formState).ts_type === "13_8702" ? (openBlock(), createBlock(_component_UFormField, {
                    key: 1,
                    class: "text-md",
                    label: "Эк. класс",
                    size: "lg",
                    name: "chassis"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_URadioGroup, {
                        modelValue: unref(formState).buscap,
                        "onUpdate:modelValue": ($event) => unref(formState).buscap = $event,
                        size: "xs",
                        variant: "table",
                        orientation: "vertical",
                        items: unref(BUS_ECO_CLASS_OPTIONS)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "actions" }, [
                  createVNode(_component_UButton, {
                    loading: props.isLoading,
                    type: "submit",
                    variant: "solid",
                    label: "Расчитать",
                    color: "primary"
                  }, null, 8, ["loading"]),
                  createVNode(_component_UButton, {
                    loading: props.isLoading,
                    type: "reset",
                    variant: "outline",
                    label: "Сбросить",
                    color: "primary"
                  }, null, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/calculator/Form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-eac3497b"]]), { __name: "CalculatorForm" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Result",
  __ssrInlineRender: true,
  props: {
    result: {},
    input: {}
  },
  emits: ["back"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "result-container" }, _attrs))} data-v-b109fa76><div class="result-content" data-v-b109fa76><div class="result-input" data-v-b109fa76><h3 data-v-b109fa76>Введенные данные:</h3><table class="input-table" data-v-b109fa76><tbody data-v-b109fa76><tr data-v-b109fa76><th scope="col" data-v-b109fa76>Возраст:</th><td data-v-b109fa76>${ssrInterpolate(props.input?.age ? unref(AGE_OPTIONS_MAP)[props.input.age] : "Не указано")}</td></tr><tr data-v-b109fa76><th scope="col" data-v-b109fa76>Стоймость автомобиля:</th><td data-v-b109fa76>${ssrInterpolate(props.input?.cost ? props.input.cost + " " + unref(CURRENCY_OPTIONS_MAP)[props.input.currency] : "Не указано")}</td></tr><tr data-v-b109fa76><th scope="col" data-v-b109fa76>Тип двигателя:</th><td data-v-b109fa76>${ssrInterpolate(props.input?.engine_type ? unref(ENGINE_TYPES_MAP)[props.input.engine_type] : "Не указано")}</td></tr><tr data-v-b109fa76><th scope="col" data-v-b109fa76>Мощность:</th><td data-v-b109fa76>${ssrInterpolate(props.input?.power ? props.input?.power + " " + unref(POWER_TYPES_MAP)[props.input?.power_edizm] : "Не указано")}</td></tr>`);
      if (props.input?.volume) {
        _push(`<tr data-v-b109fa76><th scope="col" data-v-b109fa76>Объем двигателя:</th><td data-v-b109fa76>${ssrInterpolate(props.input?.volume + " см3")}</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div><div class="result-output" data-v-b109fa76><h3 data-v-b109fa76>Таможенные сборы:</h3><table data-v-b109fa76><caption data-v-b109fa76> Примерные результаты расчета. Для точного расчета обратитесь к нашим специалистам * </caption><thead data-v-b109fa76><tr data-v-b109fa76><th scope="col" data-v-b109fa76>Платеж</th><th scope="col" data-v-b109fa76>Ставка</th><th scope="col" data-v-b109fa76>Сумма (руб)</th></tr></thead><tbody data-v-b109fa76><tr data-v-b109fa76><th scope="row" data-v-b109fa76>Таможенное оформление</th><td data-v-b109fa76>${ssrInterpolate(props.result?.tam_oform?.name)}</td><td data-v-b109fa76>${ssrInterpolate(props.result?.tam_oform?.name)}</td></tr>`);
      if (props.input?.face === "nat") {
        _push(`<tr data-v-b109fa76><th scope="row" data-v-b109fa76>Единая ставка</th><td data-v-b109fa76>${ssrInterpolate(props.result?.poshl?.name)}</td><td data-v-b109fa76>${ssrInterpolate(props.result?.poshl?.value_rub)} руб.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      if (props.input?.face === "jur" || props.input?.sequential === true || props.input?.engine_type === "electric") {
        _push(`<tr data-v-b109fa76><th scope="row" data-v-b109fa76>Пошлина</th><td data-v-b109fa76>${ssrInterpolate(props.result?.poshl?.name)}</td><td data-v-b109fa76>${ssrInterpolate(props.result?.poshl?.value_rub)} руб.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      if (props.input?.face === "jur" || props.input?.sequential === true || props.input?.engine_type === "electric") {
        _push(`<tr data-v-b109fa76><th scope="row" data-v-b109fa76>Акциз</th><td data-v-b109fa76>${ssrInterpolate(props.result?.akciz?.name)}</td><td data-v-b109fa76>${ssrInterpolate(props.result?.akciz?.value_rub)} руб.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      if (props.input?.face === "jur" || props.input?.sequential === true || props.input?.engine_type === "electric") {
        _push(`<tr data-v-b109fa76><th scope="row" data-v-b109fa76>НДС</th><td data-v-b109fa76>${ssrInterpolate(props.result?.nds?.name)}</td><td data-v-b109fa76>${ssrInterpolate(props.result?.nds?.value_rub)} руб.</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<tr data-v-b109fa76><th scope="row" data-v-b109fa76>Утилизационный сбор</th><td data-v-b109fa76>${ssrInterpolate(props.result?.util_sbor.value_base)} руб. x ${ssrInterpolate(props.result?.util_sbor.value_coef)}</td><td data-v-b109fa76>${ssrInterpolate(props.result?.util_sbor.value_rub)} руб.</td></tr></tbody><tfoot data-v-b109fa76><tr data-v-b109fa76><th colspan="2" scope="row" data-v-b109fa76>Итого c утилизационным сбором</th><td class="bold" data-v-b109fa76>${ssrInterpolate(props.result?.sum_util.value_rub)} руб.</td></tr></tfoot></table></div></div><div class="result-actions" data-v-b109fa76>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "outline",
        label: "Вернуться",
        color: "primary",
        onClick: ($event) => emits("back")
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/calculator/Result.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-b109fa76"]]), { __name: "CalculatorResult" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tamozhennyy_kalkulyator",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Калькулятор таможенных платежей",
      keywords: "калькулятор растаможки автомобилей таможенный калькулятор авто расчет таможенных платежей при ввозе автомобиля",
      description: "Онлайн сервис, позволяющий произвести расчет таможенных платежей и утилизационного сбора при ввозе из-за границы и растаможке автомобилей для физических и юридических лиц на сайте www.alta.ru",
      ogTitle: "НОВАБРОКЕР. Калькулятор таможенных платежей",
      ogDescription: "НОВАБРОКЕР. Расчет таможенных платежей за любые типы тс онлайн",
      ogUrl: "https://xn--80acboyohdrd.xn--p1ai/tamozhennyy_kalkulyator"
    });
    const toast = useToast();
    const isLoading = ref(false);
    const computeResults = ref(null);
    const stepperValue = ref(0);
    const formData = ref(null);
    const items = [
      { slot: "form", title: "Введите данные по авто" },
      { slot: "result", title: "Результат рассчета" }
    ];
    const getData = async (data) => {
      try {
        isLoading.value = true;
        return await $fetch("/api/getvalues", {
          method: "POST",
          body: data
        });
      } catch (e) {
        console.log(e);
      } finally {
        isLoading.value = false;
      }
    };
    const handleSubmit = async (data) => {
      const response = await getData(data);
      if (!response || "error" in response) {
        toast.add({
          title: "Упс, что-то пошло не так",
          color: "error",
          progress: true
        });
        return;
      }
      formData.value = data;
      computeResults.value = response;
      stepperValue.value = 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UStepper = _sfc_main$9;
      const _component_CalculatorForm = __nuxt_component_1;
      const _component_CalculatorResult = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-9375a67a><div class="header" data-v-9375a67a><h1 data-v-9375a67a>Таможенный калькулятор</h1><h2 data-v-9375a67a> Рассчитайте стоймость ввоза вашего автомобиля, без регистраций и заявок </h2></div>`);
      _push(ssrRenderComponent(_component_UStepper, {
        class: "stepper",
        disabled: "",
        items,
        "model-value": unref(stepperValue)
      }, {
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CalculatorForm, {
              ref: "form",
              "is-loading": unref(isLoading),
              onSubmit: handleSubmit
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CalculatorForm, {
                ref: "form",
                "is-loading": unref(isLoading),
                onSubmit: handleSubmit
              }, null, 8, ["is-loading"])
            ];
          }
        }),
        result: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CalculatorResult, {
              input: unref(formData),
              result: unref(computeResults),
              onBack: () => stepperValue.value = 0
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CalculatorResult, {
                input: unref(formData),
                result: unref(computeResults),
                onBack: () => stepperValue.value = 0
              }, null, 8, ["input", "result", "onBack"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tamozhennyy_kalkulyator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tamozhennyy_kalkulyator = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9375a67a"]]);

export { tamozhennyy_kalkulyator as default };
//# sourceMappingURL=tamozhennyy_kalkulyator-HFXW4He3.mjs.map
