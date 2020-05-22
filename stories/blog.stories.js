import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import BlogHeader from '../components/blog/BlogHeader'
import BlogFooter from '../components/blog/BlogFooter'
import BlogListItem from '../components/blog/BlogListItem'

const record = {
  id: 1,
  image: "/img/blogs-img/first_bl.jpg",
  header: "Marshall Gittler's Market Outlook: USD up, EUR down on risk-off; UK CPI, FOMC minutes",
  preview: "A typical “risk off” profile to the FX market: CHF and JPY were the two best-performing currencies, while the commodity currencies were the biggest losers. ",
  author: {
    name: "Marshall Gittler",
    avatar:  "/img/blogs-img/first_bl_face.jpg",
  },
  views: 4238,
  published: "2019-10-20 11:30",
};

storiesOf('Blog', module)
  .add('BlogHeader', () => ({
    components: { BlogHeader },
    template: '<blog-header />'
  }))
  .add('BlogFooter', () => ({
    components: { BlogFooter },
    template: '<blog-footer />'
  }))
  .add('BlogListItem 500px', () => ({
    components: { BlogListItem },
    data: function() {
      return {
        record: record
      };
    },
    template: '<blog-list-item :record="record" style="width: 500px"/>'
  }))
  .add('BlogListItem 300px', () => ({
    components: { BlogListItem },
    data: function() {
      return {
        record: record
      };
    },
    template: '<blog-list-item :record="record" style="width: 300px"/>'
  }))
