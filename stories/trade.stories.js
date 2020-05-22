import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import PlatformProfit from '../components/trade/PlatformProfit.vue'
import Platforms from '../components/trade/Platforms'
import TradingPlatform from '../components/trade/TradingPlatform'

storiesOf('Trade', module)
  .add('PlatformProfit', () => ({
    components: { PlatformProfit },
    template: '<platform-profit />'
  }))
  .add('Platforms', () => ({
    components: { Platforms },
    template: '<platforms />'
  }))
  .add('TradingPlatform', () => ({
    components: { TradingPlatform },
    template: '<trading-platform />'
  }))
