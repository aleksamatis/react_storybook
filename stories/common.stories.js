import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import HeaderSection from '../components/HeaderSection'
import FooterComponent from '../components/FooterComponent'

storiesOf('Common', module)
  .add('HeaderSection', () => ({
    components: { HeaderSection },
    template: '<header-section />'
  }))
  .add('FooterComponent', () => ({
    components: { FooterComponent },
    template: '<footer-component />'
  }))
