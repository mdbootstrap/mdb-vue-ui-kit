<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Tables examples</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/tables/additional/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <div class="pt-5 mx-3">
      <h3>Table with buttons</h3>
      <br />
      <mdb-tbl btn responsive striped class="mb-5">
        <mdb-tbl-head>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>
              <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
            </td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>
              <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
            </td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>
              <button type="button" class="btn btn-indigo btn-sm m-0">Button</button>
            </td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <h3>Table with checkboxes</h3>
      <br />
      <mdb-tbl responsive striped class="my-5">
        <mdb-tbl-head>
          <tr>
            <th>#</th>
            <th>thead col 1</th>
            <th>thead col 2</th>
            <th>thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr scope="row">
            <td>1</td>
            <td>tbody col 1</td>
            <td>
              <!-- Default unchecked -->
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="tableDefaultCheck1">
                  <label class="custom-control-label" for="tableDefaultCheck1">Check</label>
              </div>
            </td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>2</td>
            <td>
              <!-- Default unchecked -->
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="tableDefaultCheck2">
                  <label class="custom-control-label" for="tableDefaultCheck2">Check</label>
              </div>
            </td>
            <td>tbody col 2</td>
            <td>tbody col 3</td>
          </tr>
          <tr scope="row">
            <td>3</td>
            <td>tbody col 1</td>
            <td>tbody col 2</td>
            <td>
              <!-- Default unchecked -->
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="tableDefaultCheck3">
                  <label class="custom-control-label" for="tableDefaultCheck3">Check</label>
              </div>
            </td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <h3>Table with icons</h3>
      <br />
      <mdb-tbl btn responsive striped class="my-5">
        <mdb-tbl-head>
          <tr>
            <th>#</th>
            <th><i class="fas fa-leaf mr-2 blue-text" aria-hidden="true"></i> thead col 1</th>
            <th><i class="fas fa-leaf mr-2 teal-text" aria-hidden="true"></i> thead col 2</th>
            <th><i class="fas fa-leaf mr-2 indigo-text" aria-hidden="true"></i> thead col 3</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr>
            <th scope="row">1</th>
            <td><i class="fas fa-gem mr-2 grey-text" aria-hidden="true"></i>Cell 1</td>
            <td><i class="fas fa-download mr-2 grey-text" aria-hidden="true"></i>Cell 2</td>
            <td><i class="fas fa-book mr-2 grey-text" aria-hidden="true"></i>Cell 3</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><i class="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>Cell 4</td>
            <td><i class="fas fa-gift mr-2 grey-text" aria-hidden="true"></i>Cell 5</td>
            <td><i class="fas fa-image mr-2 grey-text" aria-hidden="true"></i>Cell 6</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><i class="fas fa-magic mr-2 grey-text" aria-hidden="true"></i>Cell 7</td>
            <td><i class="fas fa-table mr-2 grey-text" aria-hidden="true"></i>Cell 8</td>
            <td><i class="fas fa-edit mr-2 grey-text" aria-hidden="true"></i>Cell 9</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <h3>Table with panel</h3>
      <br />
      <!-- Table with panel -->
      <div class="card card-cascade narrower my-5">

        <!--Card image-->
        <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

            <div>
                <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i class="fas fa-th-large mt-0"></i>
                </button>
                <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i class="fas fa-columns mt-0"></i>
                </button>
            </div>

            <a href="" class="white-text mx-3">Table name</a>

            <div>
                <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i class="fas fa-pencil mt-0"></i>
                </button>
                <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i class="fas fa-remove mt-0"></i>
                </button>
                <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i class="fas fa-info-circle mt-0"></i>
                </button>
            </div>

        </div>
        <!--/Card image-->

        <div class="px-4">

          <div class="table-wrapper">
            <!--Table-->
            <mdb-tbl class="table table-hover mb-0">

              <!--Table head-->
              <mdb-tbl-head>
                <tr>
                  <th>
                    <input class="form-check-input" type="checkbox" id="checkbox">
                    <label class="form-check-label label-table mr-2" for="checkbox"></label>
                  </th>
                  <th class="th-lg">
                    First Name
                  </th>
                  <th class="th-lg">
                    Last Name
                  </th>
                  <th class="th-lg">
                    Username
                  </th>
                  <th class="th-lg">
                    Username
                  </th>
                  <th class="th-lg">
                    Username
                  </th>
                  <th class="th-lg">
                    Username
                  </th>
                </tr>
              </mdb-tbl-head>
              <!--Table head-->

              <!--Table body-->
              <mdb-tbl-body>
                <tr>
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" id="checkbox1">
                    <label class="form-check-label label-table" for="checkbox1"></label>
                  </th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" id="checkbox2">
                    <label class="form-check-label label-table" for="checkbox2"></label>
                  </th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" id="checkbox3">
                    <label class="form-check-label label-table" for="checkbox3" ></label>
                  </th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" id="checkbox4">
                    <label class="form-check-label label-table" for="checkbox4"></label>
                  </th>
                  <td>Paul</td>
                  <td>Topolski</td>
                  <td>@P_Topolski</td>
                  <td>Paul</td>
                  <td>Topolski</td>
                  <td>@P_Topolski</td>
                </tr>
                <tr>
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" id="checkbox5">
                    <label class="form-check-label label-table" for="checkbox5"></label>
                  </th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </mdb-tbl-body>
              <!--Table body-->
            </mdb-tbl>
            <!--Table-->
          </div>

        </div>

      </div>
      <!-- Table with panel -->

    </div>
  </mdb-container>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody, mdbIcon, mdbContainer, mdbRow } from 'mdbvue';

export default {
  name: 'TableAdditionalPage',
  components: {
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbRow,
    mdbContainer,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
