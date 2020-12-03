<template>
  <div>

    <h1>Typography Utilities</h1>
    <div class="row">
      <div class="column">
        <div class="alert -primary" role="alert">
          <div class="content">
            Most of the typography utilities, besides <code class="--background-black-lighten --padding-x-1">text-color</code> and <code class="--background-black-lighten --padding-x-1">text-transform</code>, have responsive variants for each breakpoint. Use <code class="--background-black-lighten --padding-x-1">--xs-{utility}</code>, <code class="--background-black-lighten --padding-x-1">--sm-{utility}</code>, <code class="--background-black-lighten --padding-x-1">--md-{utility}</code>, <code class="--background-black-lighten --padding-x-1">--lg-{utility}</code>, <code class="--background-black-lighten --padding-x-1">--xl-{utility}</code>.
          </div>
        </div>
        <ul>
          <li><a href="#font-family"># Font Family</a></li>
          <li><a href="#font-size"># Font Size</a></li>
          <li><a href="#font-weight"># Font Weight</a></li>
          <li><a href="#letter-spacing"># Letter Spacing</a></li>
          <li><a href="#line-height"># Line Height</a></li>
          <li><a href="#text-align"># Text Align</a></li>
          <li><a href="#text-color"># Text Color</a></li>
          <li><a href="#text-transform"># Text Transform</a></li>
          <li><a href="#vertical-align"># Vertical Align</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="font-family" class="jump"><a href="#font-family"># Font Family</a></h2>
        <p>The font family utility controls the font of an element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th style="width: 160px;">Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> --family-sans</td>
                  <td>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";</td>
                </tr>
                <tr>
                  <td> --family-serif</td>
                  <td>font-family: Georgia, Cambria, "Times New Roman", Times, serif;</td>
                </tr>
                <tr>
                  <td> --family-mono</td>
                  <td>font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="font-size" class="jump"><a href="#font-size"># Font Size</a></h2>
        <p>The font size utility controls the font size of an element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> --size-base</td>
                  <td>font-size: 1rem;</td>
                </tr>
                <tr>
                  <td> --size-xs</td>
                  <td>font-size: .75rem;</td>
                </tr>
                <tr>
                  <td> --size-sm</td>
                  <td>font-size: .875rem;</td>
                </tr>
                <tr>
                  <td> --size-lg</td>
                  <td>font-size: 1.125rem;</td>
                </tr>
                <tr>
                  <td> --size-xl</td>
                  <td>font-size: 1.25rem;</td>
                </tr>
                <tr>
                  <td> --size-2xl</td>
                  <td>font-size: 1.5rem;</td>
                </tr>
                <tr>
                  <td> --size-3xl</td>
                  <td>font-size: 1.875rem;</td>
                </tr>
                <tr>
                  <td> --size-4xl</td>
                  <td>font-size: 2.25rem;</td>
                </tr>
                <tr>
                  <td> --size-5xl</td>
                  <td>font-size: 3rem;</td>
                </tr>
                <tr>
                  <td> --size-6xl</td>
                  <td>font-size: 4rem;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="font-weight" class="jump"><a href="#font-weight"># Font Weight</a></h2>
        <p>The font weight utility controls the font weight of an element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> --weight-hairline</td>
                  <td>font-weight: 100;</td>
                </tr>
                <tr>
                  <td> --weight-thin</td>
                  <td>font-weight: 200;</td>
                </tr>
                <tr>
                  <td> --weight-light</td>
                  <td>font-weight: 300;</td>
                </tr>
                <tr>
                  <td> --weight-normal</td>
                  <td>font-weight: 400;</td>
                </tr>
                <tr>
                  <td> --weight-medium</td>
                  <td>font-weight: 500;</td>
                </tr>
                <tr>
                  <td> --weight-semibold</td>
                  <td>font-weight: 600;</td>
                </tr>
                <tr>
                  <td> --weight-bold</td>
                  <td>font-weight: 700;</td>
                </tr>
                <tr>
                  <td> --weight-extrabold</td>
                  <td>font-weight: 800;</td>
                </tr>
                <tr>
                  <td> --weight-black</td>
                  <td>font-weight: 900;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="letter-spacing" class="jump"><a href="#letter-spacing"># Letter Spacing</a></h2>
        <p>The font weight utility controls the font weight of an element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> --spacing-tighter</td>
                  <td>letter-spacing: -0.05em;</td>
                </tr>
                <tr>
                  <td> --spacing-tight</td>
                  <td>letter-spacing: -0.025em;</td>
                </tr>
                <tr>
                  <td> --spacing-normal</td>
                  <td>letter-spacing: 0;</td>
                </tr>
                <tr>
                  <td> --spacing-wide</td>
                  <td>letter-spacing: 0.025em;</td>
                </tr>
                <tr>
                  <td> --spacing-wider</td>
                  <td>letter-spacing: 0.05em;</td>
                </tr>
                <tr>
                  <td> --spacing-widest</td>
                  <td>letter-spacing: 0.1em;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="line-height" class="jump"><a href="#line-height"># Line Height</a></h2>
        <p>The line height utility controls the line height of an element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> --line-none</td>
                  <td>line-height: 1;</td>
                </tr>
                <tr>
                  <td> --line-tight</td>
                  <td>line-height: 1.25;</td>
                </tr>
                <tr>
                  <td> --line-snug</td>
                  <td>line-height: 1.375;</td>
                </tr>
                <tr>
                  <td> --line-normal</td>
                  <td>line-height: 1.5;</td>
                </tr>
                <tr>
                  <td> --line-relaxed</td>
                  <td>line-height: 1.625;</td>
                </tr>
                <tr>
                  <td> --line-loose</td>
                  <td>line-height: 2;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="text-align" class="jump"><a href="#text-align"># Text Align</a></h2>
        <p>The text align utility controls the text align of an element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> --align-left</td>
                  <td>text-align: left;</td>
                </tr>
                <tr>
                  <td> --align-center</td>
                  <td>text-align: center;</td>
                </tr>
                <tr>
                  <td> --align-right</td>
                  <td>text-align: right;</td>
                </tr>
                <tr>
                  <td> --align-justify</td>
                  <td>text-align: justify;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="text-color" class="jump"><a href="#text-color"># Text Color</a></h2>
        <p>The text color utility controls the text color of an element and contains classes for each color variable along with <code>primary</code>, <code>success</code>, <code>warning</code>, <code>danger</code>, <code>dark</code>, and <code>light</code>. This utility also includes classes for focus and hover states. See <router-link :to="{ name: 'color'}">colors</router-link>.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
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
                  <td> --color-blue</td>
                  <td></td>
                  <td>color: @color[blue];</td>
                </tr>
                <tr>
                  <td> --color-primary</td>
                  <td></td>
                  <td>color: @color[blue];</td>
                </tr>
                <tr>
                  <td> --focus-color-primary</td>
                  <td>:focus</td>
                  <td>color: @color[blue];</td>
                </tr>
                <tr>
                  <td> --hover-color-primary</td>
                  <td>:hover</td>
                  <td>color: @color[blue];</td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="text-transform" class="jump"><a href="#text-transform"># Text Transform</a></h2>
        <p>The text transform utility controls the text transform of an element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> --uppercase</td>
                  <td>text-transform: uppercase;</td>
                </tr>
                <tr>
                  <td> --lowercase</td>
                  <td>text-transform: lowercase;</td>
                </tr>
                <tr>
                  <td> --capitalize</td>
                  <td>text-transform: capitalize;</td>
                </tr>
                <tr>
                  <td> --normal-case</td>
                  <td>text-transform: none;</td>
                </tr>
                <tr>
                  <td> --truncate</td>
                  <td>
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="vertical-align" class="jump"><a href="#vertical-align"># Vertical Align</a></h2>
        <p>The vertical align utility controls the vertical align of an element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <div class="content">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> --vertical-baseline</td>
                  <td>vertical-align: baseline;</td>
                </tr>
                <tr>
                  <td> --vertical-top</td>
                  <td>vertical-align: top;</td>
                </tr>
                <tr>
                  <td> --vertical-middle</td>
                  <td>vertical-align: middle;</td>
                </tr>
                <tr>
                  <td> --vertical-bottom</td>
                  <td>vertical-align: bottom;</td>
                </tr>
                <tr>
                  <td> --vertical-text-top</td>
                  <td>vertical-align: text-top;</td>
                </tr>
                <tr>
                  <td> --vertical-text-bottom</td>
                  <td>vertical-align: text-bottom;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
