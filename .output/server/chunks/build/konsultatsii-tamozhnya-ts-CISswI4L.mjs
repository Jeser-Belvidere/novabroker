import { _ as _export_sfc, c as useHead, d as useSeoMeta, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "konsultatsii-tamozhnya-ts",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Консультации по таможенному оформлению ТС — НОВАБРОКЕР",
      meta: [
        {
          name: "keywords",
          content: "консультация таможенное оформление ТС, помощь в растаможке, таможенный консалтинг, юридическая консультация таможня, ВЭД консультации Москва"
        }
      ]
    });
    useSeoMeta({
      title: "Консультации по таможенному оформлению ТС — НОВАБРОКЕР",
      ogTitle: "НОВАБРОКЕР. Консультации по таможенному оформлению ТС",
      description: "Экспертные консультации по таможенному оформлению транспортных средств из любой страны. Расчет платежей, подбор кода ТН ВЭД, консультации для физ. и юр. лиц.",
      ogDescription: "НОВАБРОКЕР. Профессиональные консультации по таможне ТС. Работаем с автомобилями из США, Китая, ОАЭ, Кореи и Европы.",
      ogUrl: "https://xn--80acboyohdrd.xn--p1ai/services/konsultatsii-tamozhnya-ts"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-17dd22c1><section class="breadcrumbs" data-v-17dd22c1>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "breadcrumbs-main",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`&lt; Главная`);
          } else {
            return [
              createTextVNode("< Главная")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="separator" data-v-17dd22c1>/</span><span class="current" data-v-17dd22c1>Консультации по таможенному оформлению ТС</span></section><section class="hero" data-v-17dd22c1><h1 data-v-17dd22c1>Консультации по таможенному оформлению ТС</h1><p class="hero-subtitle" data-v-17dd22c1>Работаем с ТС из любой страны</p></section><section class="content" data-v-17dd22c1><div class="text-block" data-v-17dd22c1><h2 data-v-17dd22c1>Когда нужна консультация таможенного эксперта?</h2><p data-v-17dd22c1> Таможенное оформление транспортного средства — сложный процесс, в котором важно учитывать требования законодательства, правильно подготовить документы и заранее рассчитать все расходы. Ошибки при оформлении автомобиля могут привести к задержкам, дополнительным платежам и отказу в регистрации. Специалисты НоваБрокер предоставляют профессиональные консультации по таможенному оформлению ТС и помогают избежать лишних затрат и рисков. </p><p data-v-17dd22c1> Мы консультируем физических и юридических лиц по вопросам ввоза автомобилей в Россию, растаможки транспортных средств, расчета таможенных пошлин и подготовки полного пакета документов. Наши эксперты подробно объяснят порядок оформления автомобиля и помогут подобрать оптимальное решение под вашу ситуацию. </p><h3 data-v-17dd22c1>По каким вопросам мы консультируем?</h3><ul data-v-17dd22c1><li data-v-17dd22c1> Таможенное оформление автомобилей из Китая, Кореи, Японии, Европы и США </li><li data-v-17dd22c1>Расчет таможенных пошлин и утилизационного сбора</li><li data-v-17dd22c1>Проверка документов перед покупкой автомобиля</li><li data-v-17dd22c1>Оформление СБКТС и ЭПТС</li><li data-v-17dd22c1>Подготовка договоров и деклараций</li><li data-v-17dd22c1>Ввоз автомобилей для физических и юридических лиц</li><li data-v-17dd22c1>Особенности оформления электромобилей</li><li data-v-17dd22c1>Сроки и стоимость растаможки автомобиля</li><li data-v-17dd22c1> Проверка соответствия требованиям таможенного законодательства </li></ul></div><div class="text-block" data-v-17dd22c1><h2 data-v-17dd22c1>Почему важно получить консультацию заранее?</h2><p data-v-17dd22c1> Консультация по таможенному оформлению ТС позволяет заранее понять все этапы ввоза автомобиля, избежать ошибок при подаче документов и сократить время прохождения таможенных процедур. </p><p data-v-17dd22c1> Перед покупкой автомобиля за границей важно заранее рассчитать итоговую стоимость ввоза и убедиться, что транспортное средство соответствует требованиям для оформления в России. Наши специалисты помогут определить возможные риски, проверят документы и подскажут, какие платежи и процедуры потребуются именно в вашем случае. </p><p data-v-17dd22c1> Компания НоваБрокер сопровождает клиентов на всех этапах таможенного оформления транспортных средств и предоставляет актуальную информацию по действующим требованиям и правилам ввоза автомобилей. </p></div><div class="text-block" data-v-17dd22c1><h2 data-v-17dd22c1>Для кого наши консультации?</h2><p data-v-17dd22c1> Мы работаем как с физическими лицами, желающими пригнать автомобиль для личного пользования, так и с юридическими лицами и индивидуальными предпринимателями, занимающимися импортом ТС. </p></div><div class="text-block" data-v-17dd22c1><h2 data-v-17dd22c1>Преимущества консультации в НоваБрокер</h2><ul data-v-17dd22c1><li data-v-17dd22c1>Актуальная информация по таможенному законодательству</li><li data-v-17dd22c1>Опыт работы с автомобилями из разных стран</li><li data-v-17dd22c1>Помощь в подготовке документов</li><li data-v-17dd22c1>Индивидуальный расчет стоимости растаможки</li><li data-v-17dd22c1>Снижение рисков ошибок и дополнительных расходов</li><li data-v-17dd22c1>Полное сопровождение при необходимости</li></ul></div><div class="cta" data-v-17dd22c1><h2 data-v-17dd22c1>Получите консультацию</h2><p data-v-17dd22c1> Обратитесь в НоваБрокер, чтобы получить профессиональную консультацию по таможенному оформлению ТС и заранее подготовиться к безопасному и выгодному ввозу автомобиля в Россию. </p><a class="phone" href="tel:+74957783050" data-v-17dd22c1>+7 495 778-30-50</a></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/konsultatsii-tamozhnya-ts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const konsultatsiiTamozhnyaTs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17dd22c1"]]);

export { konsultatsiiTamozhnyaTs as default };
//# sourceMappingURL=konsultatsii-tamozhnya-ts-CISswI4L.mjs.map
