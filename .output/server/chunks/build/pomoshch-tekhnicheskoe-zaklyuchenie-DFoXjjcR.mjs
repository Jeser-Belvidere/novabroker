import { _ as _export_sfc, c as useHead, d as useSeoMeta, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@unhead/schema-org/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pomoshch-tekhnicheskoe-zaklyuchenie",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Помощь в оформлении технического заключения — НОВАБРОКЕР",
      meta: [
        {
          name: "keywords",
          content: "техническое заключение на автомобиль, помощь в оформлении техзаключения, экспертиза ТС, диагностика автомобиля для таможни, техническая экспертиза транспортного средства Москва"
        }
      ]
    });
    useSeoMeta({
      title: "Помощь в оформлении технического заключения — НОВАБРОКЕР",
      ogTitle: "НОВАБРОКЕР. Помощь в оформлении технического заключения",
      description: "Помощь в оформлении технического заключения. Подготовка документов для таможенного оформления, получения СБКТС и ЭПТС, постановки на учет и внесения изменений в конструкцию ТС.",
      ogDescription: "НОВАБРОКЕР. Профессиональная помощь в оформлении технического заключения для автомобилей.",
      ogUrl: "https://xn--80acboyohdrd.xn--p1ai/services/pomoshch-tekhnicheskoe-zaklyuchenie"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-f296c28a><section class="breadcrumbs" data-v-f296c28a>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "breadcrumbs-main",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("< Главная")}`);
          } else {
            return [
              createTextVNode(toDisplayString("< Главная"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="separator" data-v-f296c28a>/</span><span class="current" data-v-f296c28a>Помощь в оформлении технического заключения</span></section><section class="hero" data-v-f296c28a><h1 data-v-f296c28a>Помощь в оформлении технического заключения</h1><p class="hero-subtitle" data-v-f296c28a> Техническое заключение — один из важных документов при оформлении транспортного средства, прохождении таможенных процедур, внесении изменений в конструкцию автомобиля и постановке ТС на учет. Ошибки в документах или несоответствие требованиям могут привести к отказу в оформлении и дополнительным расходам. Компания НоваБрокер оказывает профессиональную помощь в оформлении технического заключения и сопровождает клиентов на всех этапах подготовки документов. </p><p class="hero-subtitle" data-v-f296c28a> Мы помогаем физическим и юридическим лицам быстро оформить техническое заключение для автомобилей, ввезенных из Китая, Кореи, Японии, Европы, США и других стран. </p></section><section class="content" data-v-f296c28a><div class="text-block" data-v-f296c28a><h2 data-v-f296c28a>Что такое техническое заключение</h2><p data-v-f296c28a> Техническое заключение — это документ, подтверждающий соответствие транспортного средства установленным техническим требованиям и нормам безопасности. Правильно оформленное техническое заключение позволяет ускорить процесс оформления автомобиля и избежать дополнительных проверок со стороны контролирующих органов. Специалисты НоваБрокер помогут заранее определить возможные сложности и подготовить документы без ошибок и задержек. Документ может потребоваться при: </p><ul data-v-f296c28a><li data-v-f296c28a>Таможенном оформлении автомобиля</li><li data-v-f296c28a>Получении СБКТС и ЭПТС</li><li data-v-f296c28a>Постановке транспортного средства на учет</li><li data-v-f296c28a>Внесении изменений в конструкцию автомобиля</li><li data-v-f296c28a>Оформлении переоборудования ТС</li><li data-v-f296c28a>Проверке технических характеристик автомобиля</li></ul></div><div class="text-block" data-v-f296c28a><h2 data-v-f296c28a>Что входит в услугу</h2><ul data-v-f296c28a><li data-v-f296c28a>Консультации по оформлению технического заключения</li><li data-v-f296c28a>Проверка документов и характеристик автомобиля</li><li data-v-f296c28a>Подготовка полного пакета документов</li><li data-v-f296c28a>Помощь во взаимодействии с лабораторией</li><li data-v-f296c28a>Проверка соответствия требованиям законодательства</li><li data-v-f296c28a>Сопровождение на всех этапах оформления</li><li data-v-f296c28a>Консультации по срокам и стоимости оформления</li></ul></div><div class="text-block" data-v-f296c28a><h2 data-v-f296c28a>Почему выбирают НоваБрокер</h2><ul data-v-f296c28a><li data-v-f296c28a>Опыт работы с импортными автомобилями любых категорий</li><li data-v-f296c28a>Актуальная информация по требованиям законодательства</li><li data-v-f296c28a>Помощь в подготовке документов «под ключ»</li><li data-v-f296c28a>Снижение риска отказов и дополнительных расходов</li><li data-v-f296c28a>Полное сопровождение клиента</li><li data-v-f296c28a>Оперативное оформление документов</li></ul></div><div class="cta" data-v-f296c28a><h2 data-v-f296c28a>Обратитесь в НоваБрокер</h2><p data-v-f296c28a> Получите помощь в оформлении технического заключения и профессиональное сопровождение при подготовке документов для вашего автомобиля. </p><a class="phone" href="tel:+74957783050" data-v-f296c28a>+7 495 778-30-50</a></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/pomoshch-tekhnicheskoe-zaklyuchenie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pomoshchTekhnicheskoeZaklyuchenie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f296c28a"]]);

export { pomoshchTekhnicheskoeZaklyuchenie as default };
//# sourceMappingURL=pomoshch-tekhnicheskoe-zaklyuchenie-DFoXjjcR.mjs.map
