import classNames from 'classnames';
import { mixin as clickaway } from 'vue-clickaway';
import mdbClassMixin from './mdbClassMixin';

export const mdbDropdown = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    show: {
      type: Boolean
    },
    btnGroup: {
      type: Boolean
    },
    dropup: {
      type: Boolean,
      default: false
    },
    dropright: {
      type: Boolean,
      default: false
    },
    dropleft: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      toggle: false
    };
  },
  mixins: [clickaway, mdbClassMixin],
  methods: {
    away() {
      this.toggle = false;
    }
  },
  computed: {
    className() {
      return classNames(
        this.btnGroup ? 'btn-group' : 'dropdown',
        this.show && 'show',
        this.dropup && 'dropup',
        this.dropright && 'dropright',
        this.dropleft && 'dropleft',
        this.mdbClass
      );
    },
    style() {
      return {
        'margin-left' : this.split && '-0.3rem'
      };
    }
  }
};
