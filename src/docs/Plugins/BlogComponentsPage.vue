<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Blog components</strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/blog-components/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank">
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr class="mb-5" />
    <section class="demo-section">
      <h4>Author Box v.1</h4>
      <section>
        <mdb-card-header class="border-0 font-weight-bold d-flex justify-content-between">
          <p class="mr-4 mb-0">About the author</p>
          <ul class="list-unstyled list-inline mb-0">
            <li class="list-inline-item"><a href="" class="mr-3"><mdb-icon icon="envelope" class="mr-1" />Send message</a></li>
            <li class="list-inline-item"><a href="" class="mr-3"><mdb-icon icon="user" class="mr-1" />See profile</a></li>
            <li class="list-inline-item"><a href="" class="mr-3"><mdb-icon icon="rss" class="mr-1" />Follow</a></li>
          </ul>
        </mdb-card-header>
        <mdb-media class="mt-4 px-1">
          <img class="card-img-100 d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="Generic placeholder image">
          <mdb-media-body>
            <h5 class="font-weight-bold mt-0">
              <a href="">Danny Newman</a>
            </h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et magnam.
          </mdb-media-body>
        </mdb-media>
      </section>
    </section>
    <section class="demo-section">
      <h4>Author Box v.2</h4>
      <section>
        <mdb-card-header class="border-0 font-weight-bold d-flex justify-content-between">
          <p class="mr-4 mb-0">About the author</p>
          <ul class="list-unstyled list-inline mb-0">
            <li class="list-inline-item"><a href="" class="text-default mr-3"><mdb-icon icon="envelope" class="mr-1" />Send message</a></li>
            <li class="list-inline-item"><a href="" class="text-default mr-3"><mdb-icon icon="user" class="mr-1" />See profile</a></li>
            <li class="list-inline-item"><a href="" class="text-default mr-3"><mdb-icon icon="rss" class="mr-1" />Follow</a></li>
          </ul>
        </mdb-card-header>
        <mdb-media class="mt-4 px-1">
          <img class="card-img-100 rounded-circle d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="Generic placeholder image">
          <mdb-media-body>
            <h5 class="font-weight-bold mt-0">
              <a class="text-default" href="">Danny Newman</a>
            </h5>
            <ul class="list-unstyled list-inline mb-2 pt-1">
              <li class="list-inline-item">
                <a class="grey-text mr-1"><mdb-icon fab icon="facebook" size="lg" /></a>
              </li>
              <li class="list-inline-item">
                <a class="grey-text mr-1"><mdb-icon fab icon="twitter" size="lg" /></a>
              </li>
              <li class="list-inline-item">
                <a class="grey-text mr-1"><mdb-icon fab icon="google-plus" size="lg" /></a>
              </li>
              <li class="list-inline-item">
                <a class="grey-text mr-1"><mdb-icon fab icon="linkedin" size="lg" /></a>
              </li>
              <li class="list-inline-item">
                <a class="grey-text mr-1"><mdb-icon fab icon="instagram" size="lg" /></a>
              </li>
            </ul>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et magnam.
          </mdb-media-body>
        </mdb-media>
      </section>
    </section>
    <section class="demo-section">
      <h4>Comments List v.1</h4>
      <section>
        <mdb-card-header class="border-0 font-weight-bold d-flex justify-content-between">4 comments</mdb-card-header>
        <mdb-media class="d-block d-md-flex mt-4">
          <img class="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image">
          <mdb-media-body class="text-center text-md-left ml-md-3 ml-0">
            <h5 class="font-weight-bold mt-0">
              <a href="">Miley Steward</a>
              <a href="" class="pull-right">
                <mdb-icon icon="reply" />
              </a>
            </h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <mdb-media class="d-block d-md-flex mt-4">
              <img class="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg" alt="Generic placeholder image">
              <mdb-media-body class="text-center text-md-left ml-md-3 ml-0">
                <h5 class="font-weight-bold mt-0">
                  <a href="">Tommy Smith</a>
                  <a href="" class="pull-right">
                    <mdb-icon icon="reply" />
                  </a>
                </h5>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </mdb-media-body>
            </mdb-media>
            <div class="form-group mt-4">
              <label for="quickReplyFormComment">Your comment</label>
              <textarea class="form-control" id="quickReplyFormComment" rows="5"></textarea>

              <div class="text-center my-4">
                <mdb-btn color="primary" size="sm">Post</mdb-btn>
              </div>
            </div>
            <mdb-media class="d-block d-md-flex mt-4">
              <img class="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg" alt="Generic placeholder image">
              <mdb-media-body class="text-center text-md-left ml-md-3 ml-0">
                <h5 class="font-weight-bold mt-0">
                  <a href="">Sylvester the Cat</a>
                  <a href="" class="pull-right">
                    <mdb-icon icon="reply" />
                  </a>
                </h5>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </mdb-media-body>
            </mdb-media>
          </mdb-media-body>
        </mdb-media>
        <mdb-media class="d-block d-md-flex mt-4">
          <img class="card-img-64 d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" alt="Generic placeholder image">
          <mdb-media-body class="text-center text-md-left ml-md-3 ml-0">
            <h5 class="font-weight-bold mt-0">
              <a href="">Caroline Horwitz</a>
              <a href="" class="pull-right">
                <mdb-icon icon="reply" />
              </a>
            </h5>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </mdb-media-body>
        </mdb-media>
        <mdb-pagination class="d-flex justify-content-center mt-5">
          <mdb-page-item>First</mdb-page-item>
          <mdb-page-nav prev></mdb-page-nav>
          <mdb-page-item active>1</mdb-page-item>
          <mdb-page-item>2</mdb-page-item>
          <mdb-page-item>3</mdb-page-item>
          <mdb-page-item>4</mdb-page-item>
          <mdb-page-item>5</mdb-page-item>
          <mdb-page-nav next></mdb-page-nav>
          <mdb-page-item>Last</mdb-page-item>
        </mdb-pagination>
      </section>
    </section>
    <section class="demo-section">
      <h4>Reply Form v.1</h4>
      <section>
        <mdb-card-header class="border-0 font-weight-bold d-flex justify-content-between">Leave a reply</mdb-card-header>
        <form class="px-1 mt-4">

        <!-- Comment -->
        <div class="form-group">
          <label for="replyFormComment">Your comment</label>
          <textarea class="form-control" id="replyFormComment" rows="5"></textarea>
        </div>

        <!-- Name -->
        <label for="replyFormName">Your name</label>
        <input type="email" id="replyFormName" class="form-control">

        <br>

        <!-- Email -->
        <label for="replyFormEmail">Your e-mail</label>
        <input type="email" id="replyFormEmail" class="form-control">

        <div class="text-center mt-4">
          <mdb-btn color="primary" size="md">Post</mdb-btn>
        </div>

      </form>
      <!-- Default form reply -->
      </section>
    </section>
    <section class="demo-section">
      <h4>Reply Form v.3</h4>
      <section>
        <!-- Reply form -->
        <form class="mt-4">

          <div class="d-md-flex flex-md-fill">

            <div class="input-group input-group-md px-2 mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text white grey-text" id="basic-addon9">1</span>
              </div>
              <input type="text" class="form-control mt-0 black-border rgba-white-strong" placeholder="Username"
                aria-describedby="basic-addon9">
            </div>
            <div class="input-group input-group-md px-2 mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text white grey-text" id="basic-addon10">2</span>
              </div>
              <input type="text" class="form-control mt-0 black-border rgba-white-strong" placeholder="Email"
                aria-describedby="basic-addon10">
            </div>
            <div class="input-group input-group-md px-2 mb-4">
              <div class="input-group-prepend">
                <span class="input-group-text white grey-text" id="basic-addon101">3</span>
              </div>
              <input type="text" class="form-control mt-0 black-border rgba-white-strong" placeholder="Website"
                aria-describedby="basic-1">
            </div>

          </div>

          <div class="form-group px-2">
            <textarea class="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6" placeholder="Write something here..."></textarea>
          </div>

          <div class="text-center mt-4">
            <mdb-btn color="primary" size="md">Submit</mdb-btn>
          </div>

        </form>
        <!-- Reply form -->
      </section>
    </section>
    <section class="demo-section">
      <h4>Reply Form (logged in user) v.1</h4>
      <section>
        <mdb-card-header class="border-0 font-weight-bold d-flex justify-content-between">Leave a reply (logged in user)</mdb-card-header>
        <div class="d-md-flex flex-md-fill mt-4 px-1">
          <div class="d-flex justify-content-center mr-md-5">
            <img class="card-img-100 z-depth-1 mb-4" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
              alt="avatar">
          </div>
          <textarea class="form-control pl-3 pt-3" id="exampleFormControlTextarea1" rows="6" placeholder="Write something here..."></textarea>
        </div>
        <div class="text-center mt-4">
          <mdb-btn color="primary" size="md">Submit</mdb-btn>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbCardHeader, mdbMedia, mdbMediaBody, mdbPagination, mdbPageNav, mdbPageItem, mdbBtn } from 'mdbvue';

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCardHeader,
    mdbMedia,
    mdbMediaBody,
    mdbPagination,
    mdbPageNav,
    mdbPageItem,
    mdbBtn
  }
};
</script>

<style>
</style>