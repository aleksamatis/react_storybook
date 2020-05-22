import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import BrokerPromis from '../components/about/BrokerPromis'
import BrokerPromises from '../components/about/BrokerPromises'
import DealesPlatforms from '../components/about/DealesPlatforms'
import DealesTraders from '../components/about/DealesTraders'
import DetailsPlatforms from '../components/about/DetailsPlatforms'
import DetailsTraders from '../components/about/DetailsTraders'
import LiteForex from '../components/about/LiteForex'
import NoteMobile from '../components/about/NoteMobile'
import PayPartners from '../components/about/PayPartners'

storiesOf('About', module)
  .add('BrokerPromis', () => ({
    components: { BrokerPromis },
    template: '<broker-promis />'
  }))
  .add('BrokerPromises', () => ({
    components: { BrokerPromises },
    template: '<broker-promises />'
  }))
  .add('DealesPlatforms', () => ({
    components: { DealesPlatforms },
    template: '<deales-platforms />'
  }))
  .add('DealesTraders', () => ({
    components: { DealesTraders },
    template: '<deales-traders />'
  }))
  .add('DetailsPlatforms', () => ({
    components: { DetailsPlatforms },
    template: '<details-platforms />'
  }))
  .add('DetailsTraders', () => ({
    components: { DetailsTraders },
    template: '<details-traders />'
  }))
  .add('LiteForex', () => ({
    components: { LiteForex },
    template: '<lite-forex />'
  }))
  .add('NoteMobile', () => ({
    components: { NoteMobile },
    template: '<note-mobile />'
  }))
  .add('PayPartners', () => ({
    components: { PayPartners },
    template: '<pay-partners />'
  }))