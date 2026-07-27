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
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-91718fce><section class="breadcrumbs" data-v-91718fce>`);
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
      _push(`<span class="separator" data-v-91718fce>/</span><span class="current" data-v-91718fce>Консультирование по оформлению СБКТС и ЭПТС</span></section><section class="hero" data-v-91718fce><h1 data-v-91718fce>Консультирование по оформлению СБКТС и ЭПТС, лаборатория</h1><p class="hero-subtitle" data-v-91718fce> Оформление СБКТС и ЭПТС — обязательный этап при ввозе автомобиля в Россию и постановке транспортного средства на учет. Процедура требует правильной подготовки документов, прохождения проверки в аккредитованной лаборатории и соблюдения действующих технических требований. Компания НоваБрокер предоставляет профессиональные консультации по оформлению СБКТС и ЭПТС, а также помогает организовать прохождение всех необходимых процедур без лишних сложностей и задержек. </p><p class="hero-subtitle" data-v-91718fce> Мы консультируем владельцев автомобилей, импортеров и юридические лица по вопросам получения СБКТС, оформления электронного паспорта транспортного средства (ЭПТС) и взаимодействия с испытательными лабораториями. </p></section><section class="content" data-v-91718fce><div class="text-block" data-v-91718fce><h2 data-v-91718fce>Что такое СБКТС и ЭПТС</h2><p data-v-91718fce> СБКТС — свидетельство о безопасности конструкции транспортного средства, подтверждающее соответствие автомобиля требованиям безопасности для эксплуатации на территории России. </p><p data-v-91718fce> ЭПТС — электронный паспорт транспортного средства, необходимый для регистрации автомобиля в ГИБДД и дальнейшего использования автомобиля на территории РФ. </p><p data-v-91718fce> Без оформления СБКТС и ЭПТС невозможно завершить таможенное оформление автомобиля и поставить транспортное средство на учет. </p></div><div class="text-block" data-v-91718fce><h2 data-v-91718fce>По каким вопросам мы консультируем</h2><ul data-v-91718fce><li data-v-91718fce>Оформление СБКТС для импортных автомобилей</li><li data-v-91718fce>Получение ЭПТС после растаможки</li><li data-v-91718fce>Подготовка документов для лаборатории</li><li data-v-91718fce>Проверка автомобиля на соответствие требованиям</li><li data-v-91718fce>Консультации по срокам и стоимости оформления</li><li data-v-91718fce> Оформление СБКТС на автомобили из Китая, Кореи, Японии, США и Европы </li><li data-v-91718fce>Помощь при оформлении электромобилей</li><li data-v-91718fce>Проверка пакета документов перед подачей</li><li data-v-91718fce>Сопровождение на всех этапах оформления</li></ul><p data-v-91718fce> Наши специалисты помогут разобраться в требованиях законодательства и подскажут, какие документы необходимы именно для вашего автомобиля. </p></div><div class="text-block" data-v-91718fce><h2 data-v-91718fce>Лаборатория и техническая проверка автомобиля</h2><p data-v-91718fce> Для получения СБКТС транспортное средство проходит проверку в аккредитованной лаборатории. В ходе процедуры оцениваются технические характеристики автомобиля, соответствие экологическим и безопасностным требованиям, а также корректность предоставленных документов. </p><p data-v-91718fce> Компания НоваБрокер помогает подготовиться к прохождению лаборатории, избежать ошибок при подаче документов и ускорить процесс оформления СБКТС и ЭПТС. Мы помогаем клиентам быстро пройти оформление документов и избежать распространенных ошибок при получении СБКТС и ЭПТС. </p></div><div class="text-block" data-v-91718fce><h2 data-v-91718fce>Почему выбирают НоваБрокер</h2><ul data-v-91718fce><li data-v-91718fce>Консультации по всем этапам оформления СБКТС и ЭПТС</li><li data-v-91718fce>Помощь в подготовке документов для лаборатории</li><li data-v-91718fce>Сопровождение при таможенном оформлении автомобилей</li><li data-v-91718fce>Актуальная информация по требованиям законодательства</li><li data-v-91718fce>Опыт работы с автомобилями любых категорий</li><li data-v-91718fce>Снижение риска отказов и задержек</li></ul></div><div class="cta" data-v-91718fce><h2 data-v-91718fce>Обратитесь в НоваБрокер</h2><p data-v-91718fce> Получите консультацию по оформлению СБКТС и ЭПТС, подготовьте документы для лаборатории и успешно завершите оформление автомобиля для постановки на учет в России. </p><a class="phone" href="tel:+74957783050" data-v-91718fce>+7 495 778-30-50</a></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/sbkts-i-epts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sbktsIEpts = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-91718fce"]]);

export { sbktsIEpts as default };
//# sourceMappingURL=sbkts-i-epts-CoAxVu4-.mjs.map
