<template>
  <div>

    <h1>Box Shadow Utility</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>The box shadow utility controls the box shadow of an element.</p>

          <figure>
            <div class="content">
              <div class="table-scrollable">
                <table class="--margin-bottom-0">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Properties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>--shadow</td>
                      <td>box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.14) , 0px 3px 1px -2px rgba(0,0,0,0.12) , 0px 1px 5px 0px rgba(0,0,0,0.2);</td>
                    </tr>
                    <tr>
                      <td>--shadow-md</td>
                      <td>box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2);</td>
                    </tr>
                    <tr>
                      <td>--shadow-lg</td>
                      <td>box-shadow: 0px 8px 17px 2px rgba(0,0,0,0.14) , 0px 3px 14px 2px rgba(0,0,0,0.12) , 0px 5px 5px -3px rgba(0,0,0,0.2);</td>
                    </tr>
                    <tr>
                      <td>--shadow-xl</td>
                      <td>box-shadow: 0px 16px 24px 2px rgba(0,0,0,0.14) , 0px 6px 30px 5px rgba(0,0,0,0.12) , 0px 8px 10px -7px rgba(0,0,0,0.2);</td>
                    </tr>
                    <tr>
                      <td>--shadow-2xl</td>
                      <td>box-shadow: 0px 24px 38px 3px rgba(0,0,0,0.14) , 0px 9px 46px 8px rgba(0,0,0,0.12) , 0px 11px 15px -7px rgba(0,0,0,0.2);</td>
                    </tr>
                    <tr>
                      <td>--shadow-inner</td>
                      <td>box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.12), inset 0px 0px 6px 6px rgba(0, 0, 0, 0.12);</td>
                    </tr>
                    <tr>
                      <td>--shadow-flat</td>
                      <td>box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.2), 6px 6px 0px 0px rgba(0,0,0,0.2);</td>
                    </tr>
                    <tr>
                      <td>--shadow-outline</td>
                      <td>box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);</td>
                    </tr>
                    <tr>
                      <td>--shadow-outline-primary</td>
                      <td>box-shadow: 0 0 0 2px #0074d9;</td>
                    </tr>
                    <tr>
                      <td>--shadow-outline-success</td>
                      <td>box-shadow: 0 0 0 2px #22d290;</td>
                    </tr>
                    <tr>
                      <td>--shadow-outline-warning</td>
                      <td>box-shadow: 0 0 0 2px #ffcc1a;</td>
                    </tr>
                    <tr>
                      <td>--shadow-outline-danger</td>
                      <td>box-shadow: 0 0 0 2px #eb544b;</td>
                    </tr>
                    <tr>
                      <td>--shadow-outline-dark</td>
                      <td>box-shadow: 0 0 0 2px #1e1e1e;</td>
                    </tr>
                    <tr>
                      <td>--shadow-outline-light</td>
                      <td>box-shadow: 0 0 0 2px #fff;</td>
                    </tr>
                    <tr>
                      <td>--shadow-none</td>
                      <td>box-shadow: none;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h3>Usage</h3>
          <div class="row --margin-0">
            <div class="column -12 -xl-4">
              <figure class="--shadow">
                <div class="content">
                  <h6 class="--align-center">--shadow</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-md">
                <div class="content">
                  <h6 class="--align-center">--shadow-md</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-lg">
                <div class="content">
                  <h6 class="--align-center">--shadow-lg</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-xl">
                <div class="content">
                  <h6 class="--align-center">--shadow-xl</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-2xl">
                <div class="content">
                  <h6 class="--align-center">--shadow-2xl</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-inner">
                <div class="content">
                  <h6 class="--align-center">--shadow-inner</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-flat">
                <div class="content">
                  <h6 class="--align-center">--shadow-flat</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-outline">
                <div class="content">
                  <h6 class="--align-center">--shadow-outline</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-outline-primary">
                <div class="content">
                  <h6 class="--align-center">--shadow-outline-primary</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-outline-success">
                <div class="content">
                  <h6 class="--align-center">--shadow-outline-success</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-outline-warning">
                <div class="content">
                  <h6 class="--align-center">--shadow-outline-warning</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-outline-danger">
                <div class="content">
                  <h6 class="--align-center">--shadow-outline-danger</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-outline-dark">
                <div class="content">
                  <h6 class="--align-center">--shadow-outline-dark</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-outline-light">
                <div class="content">
                  <h6 class="--align-center">--shadow-outline-light</h6>
                </div>
              </figure>
            </div>
            <div class="column -12 -xl-4">
              <figure class="--shadow-none">
                <div class="content">
                  <h6 class="--align-center">--shadow-none</h6>
                </div>
              </figure>
            </div>
          </div>
        </section>

      </div>
    </div>

  </div>
</template>
