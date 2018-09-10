<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Search</strong></h4>
      <a href="https://mdbootstrap.com/vue/components/search/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <container>
      <h3 class="my-5">Basic example</h3>
      <row>
        <column md="6">
          <mdb-input label="Search" type="text" class="mt-0"/>
        </column>
        <column md="6">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </column>
      </row>
      <h3 class="mt-4">Search with colorful border</h3>
      <row>
        <column md="6">
          <mdb-input label="Search" type="text" class="active-pink active-pink-2 mt-0 mb-3"/>
          <mdb-input label="Search" type="text" class="active-purple active-purple-2 mt-0 mb-3"/>
          <mdb-input label="Search" type="text" class="active-cyan active-cyan-2 mt-0 mb-3"/>
          <mdb-input label="Search" type="text" class="active-pink-2 mt-0 mb-3"/>
          <mdb-input label="Search" type="text" class="active-purple-2 mt-0 mb-3"/>
          <mdb-input label="Search" type="text" class="active-cyan-2 active-purple-2 mt-0 mb-3"/>
        </column>
        <column md="6">
          <div class="active-pink-3 active-pink-4 mb-3">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </div>
          <div class="active-purple-3 active-purple-4 mb-3">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </div>
          <div class="active-cyan-3 active-cyan-4 mb-3">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </div>
          <div class="active-pink-4 mb-3">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </div>
          <div class="active-purple-4 mb-3">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </div>
          <div class="active-cyan-4 mb-3">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </div>
        </column>
      </row>
      <h3 class="mt-4">Search with icon</h3>
      <row>
        <column md="6">
          <form-inline class="md-form">
            <fa icon="search" />
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
          </form-inline>
          <form-inline class="md-form active-pink active-pink-2">
            <fa icon="search" />
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
          </form-inline>
          <form-inline class="md-form active-purple active-purple-2">
            <fa icon="search" />
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
          </form-inline>
          <form-inline class="md-form active-cyan active-cyan-2 ">
            <fa icon="search" />
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
          </form-inline>
          <form-inline class="md-form active-pink-2">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
            <fa icon="search" />
          </form-inline>
          <form-inline class="md-form active-purple-2">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
            <fa icon="search" />
          </form-inline>
          <form-inline class="md-form active-cyan-2 ">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
            <fa icon="search" />
          </form-inline>
        </column>
        <column md="6">
          <form class="form-inline mt-4 mb-4">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          </form>
          <form class="form-inline active-pink-3 active-pink-4 mb-4">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          </form>
          <form class="form-inline active-purple-3 active-purple-4 mb-4">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          </form>
          <form class="form-inline active-cyan-3 active-cyan-4 mb-4">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          </form>
          <form class="form-inline mb-4">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            <i class="fa fa-search" aria-hidden="true"></i>
          </form>
          <form class="form-inline active-pink-4 mb-4">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            <i class="fa fa-search" aria-hidden="true"></i>
          </form>
          <form class="form-inline active-purple-4 mb-4">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            <i class="fa fa-search" aria-hidden="true"></i>
          </form>
          <form class="form-inline active-cyan-4 mb-4">
            <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            <i class="fa fa-search" aria-hidden="true"></i>
          </form>
        </column>
      </row>
      <h3 class="mt-4">Search with input group</h3>
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span class="input-group-text purple lighten-3" id="basic-text1"><i class="fa fa-search text-white" aria-hidden="true"></i></span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span class="input-group-text cyan lighten-2" id="basic-text1"><i class="fa fa-search text-white" aria-hidden="true"></i></span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
          <span class="input-group-text pink lighten-3" id="basic-text1"><i class="fa fa-search text-white" aria-hidden="true"></i></span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
      <div class="input-group md-form form-sm form-2 pl-0">
        <input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search" aria-label="Search" />
        <div class="input-group-append">
          <span class="input-group-text amber lighten-3" id="basic-text1"><i class="fa fa-search text-grey" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="input-group md-form form-sm form-2 pl-0">
        <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search" />
        <div class="input-group-append">
          <span class="input-group-text lime lighten-2" id="basic-text1"><i class="fa fa-search text-grey" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="input-group md-form form-sm form-2 pl-0">
        <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
        <div class="input-group-append">
          <span class="input-group-text red lighten-3" id="basic-text1"><i class="fa fa-search text-grey" aria-hidden="true"></i></span>
        </div>
      </div>
    </container>
  </container>
</template>

<script>
import { Container, Row, Column, mdbInput, FormInline, Fa } from 'mdbvue';

export default {
  name: 'MasksPage',
  components: {
    Container,
    Row,
    Column,
    mdbInput,
    FormInline,
    Fa
  }
};
</script>

<style>
.active-pink-2 input[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-pink input[type=text] {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-purple-2 input[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-purple input[type=text] {
  border-bottom: 1px solid #ce93d8;
  box-shadow: 0 1px 0 0 #ce93d8;
}
.active-cyan-2 input[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan input[type=text] {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan .fa, .active-cyan-2 .fa {
  color: #4dd0e1 !important;
}
.active-purple .fa, .active-purple-2 .fa {
  color: #ce93d8 !important;
}
.active-pink .fa, .active-pink-2 .fa {
  color: #f48fb1 !important;
}
.active-pink-4 input[type=text]:focus:not([readonly]) {
  border: 1px solid #f48fb1;
  box-shadow: 0 0 0 1px #f48fb1;
}
.active-pink-3 input[type=text] {
  border: 1px solid #f48fb1;
  box-shadow: 0 0 0 1px #f48fb1;
}
.active-purple-4 input[type=text]:focus:not([readonly]) {
  border: 1px solid #ce93d8;
  box-shadow: 0 0 0 1px #ce93d8;
}
.active-purple-3 input[type=text] {
  border: 1px solid #ce93d8;
  box-shadow: 0 0 0 1px #ce93d8;
}
.active-cyan-4 input[type=text]:focus:not([readonly]) {
  border: 1px solid #4dd0e1;
  box-shadow: 0 0 0 1px #4dd0e1;
}
.active-cyan-3 input[type=text] {
  border: 1px solid #4dd0e1;
  box-shadow: 0 0 0 1px #4dd0e1;
}
.active-cyan-3 .fa, .active-cyan-4 .fa {
  color: #4dd0e1;
}
.active-purple-3 .fa, .active-purple-4 .fa {
  color: #ce93d8;
}
.active-pink-3 .fa, .active-pink-4 .fa {
  color: #f48fb1;
}
.input-group.md-form.form-sm.form-1 input{
  border: 1px solid #bdbdbd;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-2 input {
  border: 1px solid #bdbdbd;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-2 input.red-border  {
  border: 1px solid #ef9a9a;
}
.input-group.md-form.form-sm.form-2 input.lime-border  {
  border: 1px solid #cddc39;
}
.input-group.md-form.form-sm.form-2 input.amber-border  {
  border: 1px solid #ffca28;
}
</style>
