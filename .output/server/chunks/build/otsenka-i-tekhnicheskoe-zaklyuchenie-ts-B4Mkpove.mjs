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
  __name: "otsenka-i-tekhnicheskoe-zaklyuchenie-ts",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Оценка ТС и техническое заключение — НОВАБРОКЕР",
      meta: [
        {
          name: "keywords",
          content: "оценка транспортного средства, техническое заключение на авто, оформление документов для оценки ТС, экспертиза автомобиля, независимая оценка авто Москва"
        }
      ]
    });
    useSeoMeta({
      title: "Услуги оформления документов для оценки ТС и техническому заключению — НОВАБРОКЕР",
      ogTitle: "НОВАБРОКЕР. Оценка ТС и техническое заключение",
      description: "Оформление документов для оценки ТС и технического заключения. Подготовка необходимого пакета документов для растаможки, постановки на учет, продажи и страхования автомобиля.",
      ogDescription: "НОВАБРОКЕР. Услуги оформления документов для оценки транспортного средства и получения технического заключения.",
      ogUrl: "https://xn--80acboyohdrd.xn--p1ai/services/otsenka-i-tekhnicheskoe-zaklyuchenie-ts"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-1543e338><section class="breadcrumbs" data-v-1543e338>`);
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
      _push(`<span class="separator" data-v-1543e338>/</span><span class="current" data-v-1543e338>Оценка ТС и техническое заключение</span></section><section class="hero" data-v-1543e338><h1 data-v-1543e338> Услуги оформления документов для оценки ТС и технического заключения </h1><p class="hero-subtitle" data-v-1543e338> Оформление документов для оценки транспортного средства и получения технического заключения — важный этап при ввозе автомобиля, постановке на учет, продаже, страховании или прохождении таможенного оформления. Компания НоваБрокер оказывает профессиональные услуги по подготовке и сопровождению оформления документов для оценки ТС и технического заключения в соответствии с действующими требованиями законодательства. </p><p class="hero-subtitle" data-v-1543e338> Мы помогаем быстро подготовить необходимый пакет документов, проверить корректность данных и избежать ошибок, которые могут привести к отказу в оформлении или задержкам при регистрации автомобиля. </p></section><section class="content" data-v-1543e338><div class="text-block" data-v-1543e338><h2 data-v-1543e338>Что входит в услугу</h2><ul data-v-1543e338><li data-v-1543e338>Подготовка документов для оценки транспортного средства</li><li data-v-1543e338>Помощь в получении технического заключения</li><li data-v-1543e338>Проверка VIN-номера и характеристик автомобиля</li><li data-v-1543e338>Сбор и оформление сопроводительной документации</li><li data-v-1543e338>Консультации по требованиям к оформлению ТС</li><li data-v-1543e338>Подготовка документов для таможенного оформления автомобиля</li><li data-v-1543e338>Проверка соответствия автомобиля техническим нормам</li><li data-v-1543e338>Сопровождение на всех этапах оформления</li></ul></div><div class="text-block" data-v-1543e338><h2 data-v-1543e338>Для чего требуется оценка ТС и техническое заключение</h2><p data-v-1543e338> Документы для оценки транспортного средства и техническое заключение могут потребоваться в различных ситуациях: </p><ul data-v-1543e338><li data-v-1543e338>При растаможке автомобиля</li><li data-v-1543e338>Для постановки автомобиля на учет</li><li data-v-1543e338>При оформлении ЭПТС и СБКТС</li><li data-v-1543e338>Для подтверждения технического состояния автомобиля</li><li data-v-1543e338>При расчете таможенной стоимости</li><li data-v-1543e338>Для сделок купли-продажи и страхования</li><li data-v-1543e338>При внесении изменений в конструкцию ТС</li></ul><p data-v-1543e338> Правильно оформленные документы позволяют ускорить прохождение процедур и снизить риск дополнительных проверок со стороны контролирующих органов. </p><p data-v-1543e338> Наши специалисты работают с легковыми автомобилями, электромобилями, коммерческим транспортом и техникой, ввезенной из Китая, Кореи, Японии, Европы, США и других стран. </p></div><div class="text-block" data-v-1543e338><h2 data-v-1543e338>Почему выбирают НоваБрокер</h2><p data-v-1543e338> Компания НоваБрокер помогает клиентам оперативно оформить документы для оценки ТС и технического заключения без лишней бюрократии и сложностей. Мы внимательно проверяем все данные и сопровождаем клиента на каждом этапе оформления. </p><ul data-v-1543e338><li data-v-1543e338>Оперативная подготовка документов</li><li data-v-1543e338>Соответствие актуальным требованиям законодательства</li><li data-v-1543e338>Опыт работы с импортными автомобилями</li><li data-v-1543e338>Полное сопровождение процесса</li><li data-v-1543e338>Консультации по всем вопросам оформления</li><li data-v-1543e338>Минимизация ошибок и задержек</li></ul></div><div class="cta" data-v-1543e338><h2 data-v-1543e338>Обратитесь в НоваБрокер</h2><p data-v-1543e338> Получите профессиональную помощь в оформлении документов для оценки транспортного средства и технического заключения. Мы поможем быстро подготовить все необходимые документы и пройти процедуры без лишних затрат времени и нервов. </p><a class="phone" href="tel:+74957783050" data-v-1543e338>+7 495 778-30-50</a></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/otsenka-i-tekhnicheskoe-zaklyuchenie-ts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const otsenkaITekhnicheskoeZaklyuchenieTs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1543e338"]]);

export { otsenkaITekhnicheskoeZaklyuchenieTs as default };
//# sourceMappingURL=otsenka-i-tekhnicheskoe-zaklyuchenie-ts-B4Mkpove.mjs.map
