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
  __name: "soprovozhdenie-rastamozhki-avto",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Сопровождение растаможки автомобилей — НОВАБРОКЕР",
      meta: [
        {
          name: "keywords",
          content: "растаможка автомобилей, сопровождение растаможки, таможенное оформление авто, помощь в растаможке, таможенный брокер Москва"
        }
      ]
    });
    useSeoMeta({
      title: "Сопровождение по растаможке автомобилей — НОВАБРОКЕР",
      ogTitle: "НОВАБРОКЕР. Сопровождение по растаможке автомобилей",
      description: "Профессиональное сопровождение растаможки автомобилей. Пошлины, проверки, договоры — берем на себя. Работаем с физ. и юр. лицами в Москве и РФ.",
      ogDescription: "НОВАБРОКЕР. Полное сопровождение таможенного оформления авто. Расчет пошлин, подготовка документов, прохождение проверок.",
      ogUrl: "https://xn--80acboyohdrd.xn--p1ai/services/soprovozhdenie-rastamozhki-avto"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-9fce8e5a><section class="breadcrumbs" data-v-9fce8e5a>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
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
      _push(`<span class="separator" data-v-9fce8e5a>/</span><span class="current" data-v-9fce8e5a>Сопровождение растаможки автомобилей</span></section><section class="hero" data-v-9fce8e5a><h1 data-v-9fce8e5a>Сопровождение по растаможке автомобилей</h1><p class="hero-subtitle" data-v-9fce8e5a> Пошлины, проверки, договоры — все берем на себя, вам не нужно беспокоиться </p></section><section class="content" data-v-9fce8e5a><div class="text-block" data-v-9fce8e5a><h2 data-v-9fce8e5a>Что входит в сопровождение растаможки?</h2><p data-v-9fce8e5a> Покупка автомобиля за границей — это выгодно, но процесс таможенного оформления часто вызывает сложности: расчет пошлин, подготовка документов, прохождение проверок, оформление договоров, получение СБКТС и ЭПТС. Компания НоваБрокер берет все этапы растаможки автомобиля на себя, чтобы вы получили готовый к постановке на учет автомобиль без лишних переживаний и потери времени. </p><p data-v-9fce8e5a> Мы оказываем полное сопровождение растаможки автомобилей в России для физических и юридических лиц. Работаем с легковыми автомобилями, электромобилями, коммерческим транспортом и автомобилями из Европы, Кореи, Китая, Японии, США и других стран. </p><h3 data-v-9fce8e5a>Что входит в сопровождение растаможки автомобиля:</h3><ul data-v-9fce8e5a><li data-v-9fce8e5a>Расчет таможенных пошлин и утилизационного сбора</li><li data-v-9fce8e5a>Проверка автомобиля перед ввозом</li><li data-v-9fce8e5a>Подготовка полного пакета документов</li><li data-v-9fce8e5a>Оформление договоров и таможенных деклараций</li><li data-v-9fce8e5a>Помощь в получении СБКТС</li><li data-v-9fce8e5a>Оформление ЭПТС</li><li data-v-9fce8e5a>Сопровождение на всех этапах таможенного оформления</li><li data-v-9fce8e5a> Консультации по срокам, стоимости и требованиям законодательства </li></ul></div><div class="text-block" data-v-9fce8e5a><h2 data-v-9fce8e5a>Почему выбирают НоваБрокер</h2><p data-v-9fce8e5a> Компания НоваБрокер помогает клиентам быстро и безопасно пройти растаможку автомобиля без ошибок и задержек. Мы заранее рассчитываем все расходы и предупреждаем о возможных нюансах, чтобы клиент понимал полную стоимость ввоза автомобиля еще до покупки. </p><p data-v-9fce8e5a> Наши специалисты контролируют весь процесс — от проверки документов до завершения таможенной очистки автомобиля. Вам не нужно самостоятельно разбираться в сложностях таможенного законодательства и взаимодействовать с различными инстанциями. </p><h3 data-v-9fce8e5a>Наши преимущества:</h3><ul data-v-9fce8e5a><li data-v-9fce8e5a>Полное сопровождение «под ключ»</li><li data-v-9fce8e5a>Оперативное оформление документов</li><li data-v-9fce8e5a>Минимизация рисков и задержек</li><li data-v-9fce8e5a>Прозрачный расчет таможенных платежей</li><li data-v-9fce8e5a>Опыт работы с автомобилями любых категорий</li><li data-v-9fce8e5a>Поддержка клиента на каждом этапе</li></ul></div><div class="text-block" data-v-9fce8e5a><h2 data-v-9fce8e5a>Растаможка автомобилей под ключ</h2><p data-v-9fce8e5a> Услуга растаможки автомобиля под ключ позволяет избежать ошибок при оформлении документов и снизить вероятность дополнительных расходов. Мы берем на себя взаимодействие с таможенными органами, проверку данных автомобиля, оформление необходимых сертификатов и контроль всех процедур. Если вам требуется профессиональное сопровождение растаможки автомобиля в России, специалисты НоваБрокер помогут быстро пройти все этапы оформления и получить полностью готовый к регистрации автомобиль. </p><h3 data-v-9fce8e5a>Помогаем оформить автомобили из:</h3><ul data-v-9fce8e5a><li data-v-9fce8e5a>Китая</li><li data-v-9fce8e5a>Южной Кореи</li><li data-v-9fce8e5a>Японии</li><li data-v-9fce8e5a>Германии</li><li data-v-9fce8e5a>США</li><li data-v-9fce8e5a>ОАЭ</li><li data-v-9fce8e5a>Европы и других стран</li></ul></div><div class="cta" data-v-9fce8e5a><h2 data-v-9fce8e5a>Нужна помощь с растаможкой?</h2><p data-v-9fce8e5a> Свяжитесь с нами, чтобы получить расчет стоимости растаможки автомобиля и консультацию по всем этапам оформления. </p><a class="phone" href="tel:+74957783050" data-v-9fce8e5a>+7 495 778-30-50</a></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/soprovozhdenie-rastamozhki-avto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const soprovozhdenieRastamozhkiAvto = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fce8e5a"]]);

export { soprovozhdenieRastamozhkiAvto as default };
//# sourceMappingURL=soprovozhdenie-rastamozhki-avto-8lCZZBiX.mjs.map
