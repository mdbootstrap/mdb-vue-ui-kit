export default {
  props: {
    m: String,
    p: String,
    noMdbClass: Boolean
  },
  computed: {
    mdbClass() {
      if (this.noMdbClass) return;
      let marginArray = [];
      let paddingArray = [];
      if (this.m && this.m.split(' ').length > 1) {
        this.m.split(' ').forEach(margin => {marginArray.push(`m${margin.split('')[0]}-${margin.split('')[1]}`);});
      }
      if (this.p && this.p.split(' ').length > 1) {
        this.p.split(' ').forEach(padding => {paddingArray.push(`p${padding.split('')[0]}-${padding.split('')[1]}`);});
      }
      return [
        this.m ? this.m.split(' ').length > 1 ? marginArray : 
          this.m.split('').length > 1 ? `m${this.m.split('')[0]}-${this.m.split('')[1]}` :
            `m-${this.m}` :
          false,
        this.p ? this.p.split(' ').length > 1 ? paddingArray : 
          this.p.split('').length > 1 ? `p${this.p.split('')[0]}-${this.p.split('')[1]}` :
            `p-${this.p}` :
          false,
      ];
    }
  }
};
