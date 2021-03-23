<template>
  <div>

    <h1>Border Utilities</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#color"># Color</a></li>
          <li><a href="#radius"># Radius</a></li>
          <li><a href="#style"># Style</a></li>
          <li><a href="#width"># Width</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="color" class="jump"><a href="#color"># Color</a></h2>
          <p>The border color utility controls the border color of an element and contains classes for each color variable along with <code>primary</code>, <code>success</code>, <code>warning</code>, <code>danger</code>, <code>dark</code>, and <code>light</code>. This utility also includes classes for focus and hover states. See <router-link :to="{ name: 'color'}">colors</router-link>.</p>

          <figure>
            <div class="content">
              <div class="table-scrollable">
                <table class="--margin-bottom-0">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>State</th>
                      <th>Properties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>--border-blue</td>
                      <td></td>
                      <td>border-color: @color[blue];</td>
                    </tr>
                    <tr>
                      <td>--border-primary</td>
                      <td></td>
                      <td>border-color: @color[blue];</td>
                    </tr>
                    <tr>
                      <td>--focus-border-primary</td>
                      <td>:focus</td>
                      <td>border-color: @color[blue];</td>
                    </tr>
                    <tr>
                      <td>--hover-border-primary</td>
                      <td>:hover</td>
                      <td>border-color: @color[blue];</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="radius" class="jump"><a href="#radius"># Radius</a></h2>
          <p>The border radius utility controls the border radius of an element.</p>

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
                      <td>--squared</td>
                      <td>border-radius: 0;</td>
                    </tr>
                    <tr>
                      <td>--rounded-0</td>
                      <td>border-radius: 0;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top-0</td>
                      <td>
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-right-0</td>
                      <td>
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-0</td>
                      <td>
                        border-bottom-right-radius: 0;
                        border-bottom-left-radius: 0;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-left-0</td>
                      <td>
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-top-left-0</td>
                      <td>
                        border-top-left-radius: 0;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-top-right-0</td>
                      <td>border-top-right-radius: 0;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-right-0</td>
                      <td>border-bottom-right-radius: 0;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-left-0</td>
                      <td>border-bottom-left-radius: 0;</td>
                    </tr>
                    <tr>
                      <td>--rounded</td>
                      <td>border-radius: .25rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top</td>
                      <td>
                        border-top-left-radius: .25rem;
                        border-top-right-radius: .25rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-right</td>
                      <td>
                        border-top-right-radius: .25rem;
                        border-bottom-right-radius: .25rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom</td>
                      <td>
                        border-bottom-right-radius: .25rem;
                        border-bottom-left-radius: .25rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-left</td>
                      <td>
                        border-top-left-radius: .25rem;
                        border-bottom-left-radius: .25rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-top-left</td>
                      <td>border-top-left-radius: .25rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top-right</td>
                      <td>border-top-right-radius: .25rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-right</td>
                      <td>border-bottom-right-radius: .25rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-left</td>
                      <td>border-bottom-left-radius: .25rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-sm</td>
                      <td>border-radius: .125rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top-sm</td>
                      <td>
                        border-top-left-radius: .125rem;
                        border-top-right-radius: .125rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-right-sm</td>
                      <td>
                        border-top-right-radius: .125rem;
                        border-bottom-right-radius: .125rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-sm</td>
                      <td>
                        border-bottom-right-radius: .125rem;
                        border-bottom-left-radius: .125rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-left-sm</td>
                      <td>
                        border-top-left-radius: .125rem;
                        border-bottom-left-radius: .125rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-top-left-sm</td>
                      <td>border-top-left-radius: .125rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top-right-sm</td>
                      <td>border-top-right-radius: .125rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-right-sm</td>
                      <td>border-bottom-right-radius: .125rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-left-sm</td>
                      <td>border-bottom-left-radius: .125rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-lg</td>
                      <td>border-radius: .5rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top-lg</td>
                      <td>
                        border-top-left-radius: .5rem;
                        border-top-right-radius: .5rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-right-lg</td>
                      <td>
                        border-top-right-radius: .5rem;
                        border-bottom-right-radius: .5rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-lg</td>
                      <td>
                        border-bottom-right-radius: .5rem;
                        border-bottom-left-radius: .5rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-left-lg</td>
                      <td>
                        border-top-left-radius: .5rem;
                        border-bottom-left-radius: .5rem;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-top-left-lg</td>
                      <td>border-top-left-radius: .5rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top-right-lg</td>
                      <td>border-top-right-radius: .5rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-right-lg</td>
                      <td>border-bottom-right-radius: .5rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-left-lg</td>
                      <td>border-bottom-left-radius: .5rem;</td>
                    </tr>
                    <tr>
                      <td>--rounded-full</td>
                      <td>border-radius: 9999px;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top-full</td>
                      <td>
                        border-top-left-radius: 9999px;
                        border-top-right-radius: 9999px;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-right-full</td>
                      <td>
                        border-top-right-radius: 9999px;
                        border-bottom-right-radius: 9999px;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-full</td>
                      <td>
                        border-bottom-right-radius: 9999px;
                        border-bottom-left-radius: 9999px;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-left-full</td>
                      <td>
                        border-top-left-radius: 9999px;
                        border-bottom-left-radius: 9999px;
                      </td>
                    </tr>
                    <tr>
                      <td>--rounded-top-left-full</td>
                      <td>border-top-left-radius: 9999px;</td>
                    </tr>
                    <tr>
                      <td>--rounded-top-right-full</td>
                      <td>border-top-right-radius: 9999px;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-right-full</td>
                      <td>border-bottom-right-radius: 9999px;</td>
                    </tr>
                    <tr>
                      <td>--rounded-bottom-left-full</td>
                      <td>border-bottom-left-radius: 9999px;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="style" class="jump"><a href="#style"># Style</a></h2>
          <p>The border style utility controls the style of an element's border.</p>

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
                      <td>--border-solid</td>
                      <td>border-style: solid;</td>
                    </tr>
                    <tr>
                      <td>--border-dashed</td>
                      <td>border-style: dashed;</td>
                    </tr>
                    <tr>
                      <td>--border-dotted</td>
                      <td>border-style: dotted;</td>
                    </tr>
                    <tr>
                      <td>--border-double</td>
                      <td>border-style: double;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="width" class="jump"><a href="#width"># Width</a></h2>
          <p>The border width utility controls the width of an element's border.</p>

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
                      <td>--border-0</td>
                      <td>border-width: 0px;</td>
                    </tr>
                    <tr>
                      <td>--border-top-0</td>
                      <td>border-top-width: 0px;</td>
                    </tr>
                    <tr>
                      <td>--border-right-0</td>
                      <td>border-right-width: 0px;</td>
                    </tr>
                    <tr>
                      <td>--border-bottom-0</td>
                      <td>border-bottom-width: 0px;</td>
                    </tr>
                    <tr>
                      <td>--border-left-0</td>
                      <td>border-left-width: 0px;</td>
                    </tr>
                    <tr>
                      <td>--border</td>
                      <td>border-width: 1px;</td>
                    </tr>
                    <tr>
                      <td>--border-top</td>
                      <td>border-top-width: 1px;</td>
                    </tr>
                    <tr>
                      <td>--border-right</td>
                      <td>border-right-width: 1px;</td>
                    </tr>
                    <tr>
                      <td>--border-bottom</td>
                      <td>border-bottom-width: 1px;</td>
                    </tr>
                    <tr>
                      <td>--border-left</td>
                      <td>border-left-width: 1px;</td>
                    </tr>
                    <tr>
                      <td>--border-2</td>
                      <td>border-width: 2px;</td>
                    </tr>
                    <tr>
                      <td>--border-top-2</td>
                      <td>border-top-width: 2px;</td>
                    </tr>
                    <tr>
                      <td>--border-right-2</td>
                      <td>border-right-width: 2px;</td>
                    </tr>
                    <tr>
                      <td>--border-bottom-2</td>
                      <td>border-bottom-width: 2px;</td>
                    </tr>
                    <tr>
                      <td>--border-left-2</td>
                      <td>border-left-width: 2px;</td>
                    </tr>
                    <tr>
                      <td>--border-4</td>
                      <td>border-width: 4px;</td>
                    </tr>
                    <tr>
                      <td>--border-top-4</td>
                      <td>border-top-width: 4px;</td>
                    </tr>
                    <tr>
                      <td>--border-right-4</td>
                      <td>border-right-width: 4px;</td>
                    </tr>
                    <tr>
                      <td>--border-bottom-4</td>
                      <td>border-bottom-width: 4px;</td>
                    </tr>
                    <tr>
                      <td>--border-left-4</td>
                      <td>border-left-width: 4px;</td>
                    </tr>
                    <tr>
                      <td>--border-6</td>
                      <td>border-width: 6px;</td>
                    </tr>
                    <tr>
                      <td>--border-top-6</td>
                      <td>border-top-width: 6px;</td>
                    </tr>
                    <tr>
                      <td>--border-right-6</td>
                      <td>border-right-width: 6px;</td>
                    </tr>
                    <tr>
                      <td>--border-bottom-6</td>
                      <td>border-bottom-width: 6px;</td>
                    </tr>
                    <tr>
                      <td>--border-left-6</td>
                      <td>border-left-width: 6px;</td>
                    </tr>
                    <tr>
                      <td>--border-8</td>
                      <td>border-width: 8px;</td>
                    </tr>
                    <tr>
                      <td>--border-top-8</td>
                      <td>border-top-width: 8px;</td>
                    </tr>
                    <tr>
                      <td>--border-right-8</td>
                      <td>border-right-width: 8px;</td>
                    </tr>
                    <tr>
                      <td>--border-bottom-8</td>
                      <td>border-bottom-width: 8px;</td>
                    </tr>
                    <tr>
                      <td>--border-left-8</td>
                      <td>border-left-width: 8px;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
