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
  __name: "sbkts-i-epts",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "СБКТС и ЭПТС оформление — НОВАБРОКЕР",
      meta: [
        {
          name: "keywords",
          content: "СБКТС, ЭПТС, оформление СБКТС, электронный ПТС, заключение СБКТС на автомобиль, конструкция ТС, сертификация автомобиля Москва"
        }
      ]
    });
    useSeoMeta({
      title: "Консультирование по оформлению СБКТС и ЭПТС — НОВАБРОКЕР",
      ogTitle: "НОВАБРОКЕР. Консультирование по СБКТС и ЭПТС",
      description: "Консультации по оформлению СБКТС и ЭПТС. Помощь в подготовке документов и прохождении лаборатории для получения свидетельства и электронного паспорта транспортного средства.",
      ogDescription: "НОВАБРОКЕР. Консультирование по оформлению СБКТС и ЭПТС, помощь с лабораторией.",
      ogUrl: "https://xn--80acboyohdrd.xn--p1ai/services/sbkts-i-epts"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-e0a9281d><section class="breadcrumbs" data-v-e0a9281d>`);
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
      _push(`<span class="separator" data-v-e0a9281d>/</span><span class="current" data-v-e0a9281d>Консультирование по оформлению СБКТС и ЭПТС</span></section><section class="hero" data-v-e0a9281d><h1 data-v-e0a9281d>Консультирование по оформлению СБКТС и ЭПТС, лаборатория</h1><p class="hero-subtitle" data-v-e0a9281d> Оформление СБКТС и ЭПТС — обязательный этап при ввозе автомобиля в Россию и постановке транспортного средства на учет. Процедура требует правильной подготовки документов, прохождения проверки в аккредитованной лаборатории и соблюдения действующих технических требований. Компания НоваБрокер предоставляет профессиональные консультации по оформлению СБКТС и ЭПТС, а также помогает организовать прохождение всех необходимых процедур без лишних сложностей и задержек. </p><p class="hero-subtitle" data-v-e0a9281d> Мы консультируем владельцев автомобилей, импортеров и юридические лица по вопросам получения СБКТС, оформления электронного паспорта транспортного средства (ЭПТС) и взаимодействия с испытательными лабораториями. </p></section><section class="content" data-v-e0a9281d><div class="text-block" data-v-e0a9281d><h2 data-v-e0a9281d>Что такое СБКТС и ЭПТС</h2><p data-v-e0a9281d> СБКТС — свидетельство о безопасности конструкции транспортного средства, подтверждающее соответствие автомобиля требованиям безопасности для эксплуатации на территории России. </p><p data-v-e0a9281d> ЭПТС — электронный паспорт транспортного средства, необходимый для регистрации автомобиля в ГИБДД и дальнейшего использования автомобиля на территории РФ. </p><p data-v-e0a9281d> Без оформления СБКТС и ЭПТС невозможно завершить таможенное оформление автомобиля и поставить транспортное средство на учет. </p></div><div class="text-block" data-v-e0a9281d><h2 data-v-e0a9281d>По каким вопросам мы консультируем</h2><ul data-v-e0a9281d><li data-v-e0a9281d>Оформление СБКТС для импортных автомобилей</li><li data-v-e0a9281d>Получение ЭПТС после растаможки</li><li data-v-e0a9281d>Подготовка документов для лаборатории</li><li data-v-e0a9281d>Проверка автомобиля на соответствие требованиям</li><li data-v-e0a9281d>Консультации по срокам и стоимости оформления</li><li data-v-e0a9281d> Оформление СБКТС на автомобили из Китая, Кореи, Японии, США и Европы </li><li data-v-e0a9281d>Помощь при оформлении электромобилей</li><li data-v-e0a9281d>Проверка пакета документов перед подачей</li><li data-v-e0a9281d>Сопровождение на всех этапах оформления</li></ul><p data-v-e0a9281d> Наши специалисты помогут разобраться в требованиях законодательства и подскажут, какие документы необходимы именно для вашего автомобиля. </p></div><div class="text-block" data-v-e0a9281d><h2 data-v-e0a9281d>Лаборатория и техническая проверка автомобиля</h2><p data-v-e0a9281d> Для получения СБКТС транспортное средство проходит проверку в аккредитованной лаборатории. В ходе процедуры оцениваются технические характеристики автомобиля, соответствие экологическим и безопасностным требованиям, а также корректность предоставленных документов. </p><p data-v-e0a9281d> Компания НоваБрокер помогает подготовиться к прохождению лаборатории, избежать ошибок при подаче документов и ускорить процесс оформления СБКТС и ЭПТС. Мы помогаем клиентам быстро пройти оформление документов и избежать распространенных ошибок при получении СБКТС и ЭПТС. </p></div><div class="text-block" data-v-e0a9281d><h2 data-v-e0a9281d>Почему выбирают НоваБрокер</h2><ul data-v-e0a9281d><li data-v-e0a9281d>Консультации по всем этапам оформления СБКТС и ЭПТС</li><li data-v-e0a9281d>Помощь в подготовке документов для лаборатории</li><li data-v-e0a9281d>Сопровождение при таможенном оформлении автомобилей</li><li data-v-e0a9281d>Актуальная информация по требованиям законодательства</li><li data-v-e0a9281d>Опыт работы с автомобилями любых категорий</li><li data-v-e0a9281d>Снижение риска отказов и задержек</li></ul></div><div class="cta" data-v-e0a9281d><h2 data-v-e0a9281d>Обратитесь в НоваБрокер</h2><p data-v-e0a9281d> Получите консультацию по оформлению СБКТС и ЭПТС, подготовьте документы для лаборатории и успешно завершите оформление автомобиля для постановки на учет в России. </p><a class="phone" href="tel:+74957783050" data-v-e0a9281d>+7 495 778-30-50</a></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/sbkts-i-epts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sbktsIEpts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0a9281d"]]);

export { sbktsIEpts as default };
//# sourceMappingURL=sbkts-i-epts-Ci-N6P_t.mjs.map
