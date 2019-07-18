<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Treeview</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/plugins/vue/treeview/?utm_source=DemoApp&utm_medium=MDBVueFree"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4>Treeview</h4>
      <section>
        <mdb-treeview style="width: 25%" header="Folders">
          <mdb-treeview-item nested far icon="envelope-open" title="Mail">
            <mdb-treeview-item far icon="address-book" title="Contact"/>
            <mdb-treeview-item tag="a" href="#" far icon="bell" title="Offer"/>
            <mdb-treeview-item nested far icon="calendar" title="Calendar">
              <mdb-treeview-item far icon="clock" title="Deadlines"/>
              <mdb-treeview-item icon="users" title="Meetings"/>
              <mdb-treeview-item icon="basketball-ball" title="Workouts"/>
              <mdb-treeview-item icon="mug-hot" title="Events"/>
            </mdb-treeview-item>
          </mdb-treeview-item>
          <mdb-treeview-item far nested title="Inbox">
            <mdb-treeview-item far title="Admin"/>
            <mdb-treeview-item far title="Corporate"/>
            <mdb-treeview-item far title="Finance"/>
            <mdb-treeview-item far title="Other"/>
          </mdb-treeview-item>
          <mdb-treeview-item nested far icon="gem" title="Favourites">
            <mdb-treeview-item icon="pepper-hot" title="Restaurants"/>
            <mdb-treeview-item icon="eye" title="Places"/>
            <mdb-treeview-item icon="gamepad" title="Games"/>
            <mdb-treeview-item icon="cocktail" title="Cocktails"/>
            <mdb-treeview-item icon="pizza-slice" title="Food"/>
          </mdb-treeview-item>
          <mdb-treeview-item far icon="comment" title="Notes"/>
          <mdb-treeview-item icon="cog" title="Settings"/>
          <mdb-treeview-item icon="desktop" title="Devices"/>
          <mdb-treeview-item icon="trash-alt" title="Deleted items"/>
        </mdb-treeview>
      </section>
    </section>
    <section class="demo-section">
      <h4>Animated Treeview</h4>
      <section>
        <mdb-treeview style="width: 25%" header="Folders" animated>
          <mdb-treeview-item nested animated far icon="envelope-open" title="Mail">
            <mdb-treeview-item far icon="address-book" title="Contact"/>
            <mdb-treeview-item far icon="bell" title="Offers"/>
            <mdb-treeview-item nested animated far icon="calendar" title="Calendar">
              <mdb-treeview-item far icon="clock" title="Deadlines"/>
              <mdb-treeview-item icon="users" title="Meetings"/>
              <mdb-treeview-item icon="basketball-ball" title="Workouts"/>
              <mdb-treeview-item icon="mug-hot" title="Events"/>
            </mdb-treeview-item>
          </mdb-treeview-item>
          <mdb-treeview-item far nested animated title="Inbox">
            <mdb-treeview-item far title="Admin"/>
            <mdb-treeview-item far title="Corporate"/>
            <mdb-treeview-item far title="Finance"/>
            <mdb-treeview-item far title="Other"/>
          </mdb-treeview-item>
          <mdb-treeview-item nested animated far icon="gem" title="Favourites">
            <mdb-treeview-item icon="pepper-hot" title="Restaurants"/>
            <mdb-treeview-item icon="eye" title="Places"/>
            <mdb-treeview-item icon="gamepad" title="Games"/>
            <mdb-treeview-item icon="cocktail" title="Cocktails"/>
            <mdb-treeview-item icon="pizza-slice" title="Food"/>
          </mdb-treeview-item>
          <mdb-treeview-item far icon="comment" title="Notes"/>
          <mdb-treeview-item icon="cog" title="Settings"/>
          <mdb-treeview-item icon="desktop" title="Devices"/>
          <mdb-treeview-item icon="trash-alt" title="Deleted items"/>
        </mdb-treeview>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbTreeview,
  mdbTreeviewItem
} from "mdbvue";
export default {
  name: "TreeviewPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbTreeview,
    mdbTreeviewItem
  }
};
</script>

<style>
</style>
