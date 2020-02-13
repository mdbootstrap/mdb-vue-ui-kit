<template>
  <component :is="tag" :class="className">
    <ol class="carousel-indicators" v-if="indicators">
      <li
        v-for="(item, i) in items"
        :key="i"
        :class="{ active: activeItem === i }"
        @click="changeActiveItem(i)"
      ></li>
    </ol>

    <div class="carousel-inner">
      <div class="items-container w-100 p-0">
        <div
          v-for="(item, i) in items"
          class="item animated"
          :key="i"
          :style="
            `z-index: ${i === activeItem ? '2' : i === prevItem ? '1' : '0'}; position: ${i === activeItem ? 'relative' : 'absolute'};`
          "
          :class="`${i === activeItem ? enterClass : leaveClass}`"
        >
          <div>
            <slot v-if="customSlots" :name="`${i + 1}`"></slot>

            <mdb-view v-else>
              <img
                v-if="items[i].img"
                :src="items[i].src"
                :alt="items[i].alt"
                class="d-block w-100"
              />
              <video
                v-if="items[i].video"
                class="video-fluid d-block"
                :autoPlay="items[i].auto"
                :loop="items[i].loop"
                :muted="items[i].muted"
              >
                <source :src="items[i].src" type="video/mp4" />
              </video>
              <mdb-mask
                v-if="items[i].mask"
                :overlay="items[i].mask"
              ></mdb-mask>
            </mdb-view>
            <div
              v-if="typeof items !== 'number' && items[i].caption"
              class="carousel-caption animated"
              :class="
                items[i].caption.animation
                  ? items[i].caption.animation
                  : 'fadeIn'
              "
            >
              <h3 class="h3-responsive" v-if="items[i].caption.title">
                {{ items[i].caption.title }}
              </h3>
              <p v-if="items[i].caption.text">{{ items[i].caption.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="controlls">
        <a
          class="carousel-control-prev"
          @click="changeActiveItem(activeItem - 1)"
        >
          <i v-if="controllIcons && controllIcons.length > 0" :class="controllIcons[0]"></i>
          <span v-else class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Prev</span>
        </a>
        <a
          class="carousel-control-next"
          @click="changeActiveItem(activeItem + 1)"
        >
          <i v-if="controllIcons && controllIcons.length > 0" :class="controllIcons[1]"></i>
          <span v-else class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </component>
</template>

<script>
import mdbCarousel from "../../mixins/mdbCarousel";

const Carousel = {
  computed: {
    className() {
      return ["carousel", "carousel-fade"];
    },
    numOfItems() {
      if (typeof this.items === "number") return this.items;
      return this.items.length;
    }
  },
  mixins: [mdbCarousel]
};

export default Carousel;
export { Carousel as mdbCarousel };
</script>

<style scoped>
.item {
  min-width: 100%;
  translate: all 1s linear;
  position: absolute;
  top: 0;
}

.items-container {
  position: relative;
  overflow: hidden;
  transition: height 0.25s linear;
}

.carousel {
  height: max-content;
  transition: height 0.25s linear;
}

.carousel-control-prev, .carousel-control-next {
  z-index: 1000;
}
</style>
