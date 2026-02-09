import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    size: { default: "md" },
    pointer: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const className = computed(() => {
      return `${props.name} ${props.size} ${props.pointer ? "pointer" : ""}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["icon", unref(className)]
      }, _attrs))} data-v-095268f8></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-095268f8"]]), { __name: "UIIcon" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Icon-BcpfI1mv.mjs.map
