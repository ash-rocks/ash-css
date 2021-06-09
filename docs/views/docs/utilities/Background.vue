<template>
  <div>

    <h1>Background Utilities</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#attachment"># Attachment</a></li>
          <li><a href="#color"># Color</a></li>
          <li><a href="#position"># Position</a></li>
          <li><a href="#repeat"># Repeat</a></li>
          <li><a href="#size"># Size</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="attachment" class="jump"><a href="#attachment"># Attachment</a></h2>
          <p>The background attachment utility controls how a background images behaves on scroll.</p>

          <div class="table-scrollable">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>--background-fixed</td>
                  <td>background-attachment: fixed;</td>
                </tr>
                <tr>
                  <td>--background-local</td>
                  <td>background-attachment: local;</td>
                </tr>
                <tr>
                  <td>--background-scroll</td>
                  <td>background-attachment: scroll;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 id="color" class="jump"><a href="#color"># Color</a></h2>
          <p>The background color utility controls the background color of an element and contains classes for each color variable along with <code>primary</code>, <code>success</code>, <code>warning</code>, <code>danger</code>, <code>dark</code>, and <code>light</code>. This utility also includes classes for focus and hover states. See <router-link :to="{ name: 'color'}">colors</router-link>.</p>

          <div class="table-scrollable">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>State</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>--background-blue</td>
                  <td></td>
                  <td>background-color: @color[blue];</td>
                </tr>
                <tr>
                  <td>--background-primary</td>
                  <td></td>
                  <td>background-color: @color[blue];</td>
                </tr>
                <tr>
                  <td>--focus-background-primary</td>
                  <td>:focus</td>
                  <td>background-color: @color[blue];</td>
                </tr>
                <tr>
                  <td>--hover-background-primary</td>
                  <td>:hover</td>
                  <td>background-color: @color[blue];</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 id="position" class="jump"><a href="#position"># Position</a></h2>
          <p>The background position utility controls the position of the element's background image.</p>

          <div class="table-scrollable">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>--background-bottom</td>
                  <td>background-position: bottom;</td>
                </tr>
                <tr>
                  <td>--background-center</td>
                  <td>background-position: center;</td>
                </tr>
                <tr>
                  <td>--background-left</td>
                  <td>background-position: left;</td>
                </tr>
                <tr>
                  <td>--background-left</td>
                  <td>background-position: left;</td>
                </tr>
                <tr>
                  <td>--background-left-bottom</td>
                  <td>background-position: left bottom;</td>
                </tr>
                <tr>
                  <td>--background-left-top</td>
                  <td>background-position: left top;</td>
                </tr>
                <tr>
                  <td>--background-right</td>
                  <td>background-position: right;</td>
                </tr>
                <tr>
                  <td>--background-right-bottom</td>
                  <td>background-position: right bottom;</td>
                </tr>
                <tr>
                  <td>--background-right-top</td>
                  <td>background-position: right top;</td>
                </tr>
                <tr>
                  <td>--background-top</td>
                  <td>background-position: top;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 id="repeat" class="jump"><a href="#repeat"># Repeat</a></h2>
          <p>The background repeat utility controls the repetition of an element's background image.</p>

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
                  <td>--background-repeat</td>
                  <td>background-repeat: repeat;</td>
                </tr>
                <tr>
                  <td>--background-no-repeat</td>
                  <td>background-repeat: no-repeat;</td>
                </tr>
                <tr>
                  <td>--background-repeat-x</td>
                  <td>background-repeat: repeat-x;</td>
                </tr>
                <tr>
                  <td>--background-repeat-y</td>
                  <td>background-repeat: repeat-y;</td>
                </tr>
                <tr>
                  <td>--background-repeat-round</td>
                  <td>background-repeat: round;</td>
                </tr>
                <tr>
                  <td>--background-repeat-space</td>
                  <td>background-repeat: space;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 id="size" class="jump"><a href="#size"># Size</a></h2>
          <p>The background size utility controls the size of an element's background image.</p>

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
                  <td>--background-auto</td>
                  <td>background-size: auto;</td>
                </tr>
                <tr>
                  <td>--background-cover</td>
                  <td>background-size: cover;</td>
                </tr>
                <tr>
                  <td>--background-contain</td>
                  <td>background-size: contain;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>

  </div>
</template>
