<template>
  <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Table Responsive
</strong></h4>
      <a href="https://mdbootstrap.com/content/bootstrap-table-responsive/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <div class="mt-5 pt-5 mx-3">
      <h1>Table responsvie</h1>
      <br />
      <h3>Always responsive</h3>
      <br />
      <tbl responsive>
        <tbl-head color="primary-color" textWhite>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>

      <h3>Breakpoint specific</h3>
      <br />
      <tbl responsiveSm>
        <tbl-head color="default-color" textWhite>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>

      <tbl responsiveMd>
        <tbl-head color="light">
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>

      <tbl responsiveLg>
        <tbl-head color="dark">
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>

      <tbl responsiveXl>
        <tbl-head color="danger-color" textWhite>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>

      <h3>Table columns with auto width</h3>
      <br />
      <tbl responsive autoWidth>
        <tbl-head>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>

      <h3>Table columns with minimal width</h3>
      <br />
      <tbl responsive>
        <tbl-head color="secondary-color">
          <tr>
            <th class="th-lg">#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>

      <tbl responsive>
        <tbl-head color="primary-color" textWhite>
          <tr>
            <th class="th-sm">#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>

      <h3>Table columns with fixed width</h3>
      <br />
      <tbl responsive fixed>
        <tbl-head>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
            <th>thead col 3</th>
          </tr>
        </tbl-head>
        <tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
            <td>tbody col 3</td>
          </tr>
        </tbl-body>
      </tbl>
    </div>
  </container>
</template>

<script>
import { Tbl, TblHead, TblBody, Container, Row, Fa } from 'mdbvue';

export default {
  name: 'TableResponsivePage',
  components: {
    Tbl,
    TblHead,
    TblBody,
    Fa,
    Container,
    Row
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
