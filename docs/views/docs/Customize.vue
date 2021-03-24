<template>
  <div>

    <h1>Customize</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#variables"># Variables</a></li>
          <li><a href="#utilities"># Utilities</a></li>
          <li><a href="#optimizing"># Optimizing</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="variables" class="jump"><a href="#variables"># Variables</a></h2>
          <p>ASH is built upon <a href="http://lesscss.org/" target="_blank" rel="noreferrer">less css</a> and utilizes variables, mixins, logical functions, and list functions. You can easily customize ASH by changing variables. Variables are broken up by feature and are located in <code>/ash/variables</code> with the following file structure:</p>

          <ul class="-circle">
            <li><code>_all.less</code> - used to import all variables into the main <code>/ash/ash.less</code> file</li>
            <li><code>background.less</code> - used to build the background utilities</li>
            <li><code>border.less</code> - used to build the default borders and border utilities</li>
            <li><code>box-shadow.less</code> - used to build the default box-shadows and box-shadow utilities</li>
            <li><code>color.less</code> - used to build ASH's accessible color pallete and utilities</li>
            <li><code>cursor.less</code> - used to build the cursor utilities</li>
            <li><code>display.less</code> - used to build the display utilities</li>
            <li><code>flex.less</code> - used to build the flex and alignment utilities</li>
            <li><code>grid.less</code> - used to build ASH's flex-based grid system</li>
            <li><code>margin.less</code> - used to build the default margins and margin utilities</li>
            <li><code>opacity.less</code> - used to build the opacity utilities</li>
            <li><code>overflow.less</code> - used to build the overflow utilities</li>
            <li><code>padding.less</code> - used to build the default paddings and padding utilities</li>
            <li><code>select.less</code> - used to build the select utilities</li>
            <li><code>side.less</code> - used to declare the sides used for other utilities</li>
            <li><code>typography.less</code> - used to build the default typography and typography utilities</li>
            <li><code>z-index.less</code> - used to build the default z-indexes and z-index utilities</li>
          </ul>
        </section>

        <section>
          <h2 id="utilities" class="jump"><a href="#utilities"># Utilities</a></h2>
          <p>You can customize your layout and elements by using the plethora of utilities. All utilities are used by adding the <code>--{utility}</code> class to your elements and some even have responsive versions available by using <code>---{breakpoint}-{utility}</code>. Utilities are broken up by feature and are located in <code>/ash/utilities</code> with the following file structure:</p>

          <ul class="-circle">
            <li><code>background/</code>
              <ul class="-disc">
                <li><code>background-attachment.less</code></li>
                <li><code>background-color.less</code></li>
                <li><code>background-position.less</code></li>
                <li><code>background-repeat.less</code></li>
                <li><code>background-size.less</code></li>
              </ul>
            </li>
            <li><code>border/</code>
              <ul class="-disc">
                <li><code>border-color.less</code></li>
                <li><code>border-radius.less</code></li>
                <li><code>border-style.less</code></li>
                <li><code>border-width.less</code></li>
              </ul>
            </li>
            <li><code>flex/</code>
              <ul class="-disc">
                <li><code>align-content.less</code></li>
                <li><code>align-items.less</code></li>
                <li><code>align-self.less</code></li>
                <li><code>flex-direction.less</code></li>
                <li><code>flex-grow.less</code></li>
                <li><code>flex-order.less</code></li>
                <li><code>flex-shrink.less</code></li>
                <li><code>flex-wrap.less</code></li>
                <li><code>flex.less</code></li>
                <li><code>justify-content.less</code></li>
                <li><code>justify-items.less</code></li>
                <li><code>justify-self.less</code></li>
              </ul>
            </li>
            <li><code>typography/</code>
              <ul class="-disc">
                <li><code>font-family.less</code></li>
                <li><code>font-size.less</code></li>
                <li><code>font-weight.less</code></li>
                <li><code>letter-spacing.less</code></li>
                <li><code>line-height.less</code></li>
                <li><code>text-align.less</code></li>
                <li><code>text-color.less</code></li>
                <li><code>text-transform.less</code></li>
                <li><code>vertical-align.less</code></li>
              </ul>
            </li>
            <li><code>box-shadow.less</code></li>
            <li><code>cursor.less</code></li>
            <li><code>display.less</code></li>
            <li><code>margin.less</code></li>
            <li><code>opacity.less</code></li>
            <li><code>overflow.less</code></li>
            <li><code>padding.less</code></li>
            <li><code>select.less</code></li>
          </ul>
        </section>

        <section>
          <h2 id="optimizing" class="jump"><a href="#optimizing"># Optimizing</a></h2>
          <p>If you are building from source, which should be done over using the CDN or just including the minified file, then you should optimize the built CSS by either commenting out unneeded features and utilities in the <code>/ash/ash.less</code> file or by using a utility like <a href="https://purgecss.com/" target="_blank" rel="noreferrer">PurgeCSS</a>.</p>

          <p>Using the default configuration, ASH CSS is 256kB uncompressed, 193kB minified, 25kB minified and compressed with Gzip, and 20kB when minified and compressed with Brotli. Half of the file size comes from the utilities.</p>

          <table>
            <thead>
              <tr>
                <th>Uncompressed</th>
                <th>Minified</th>
                <th>Gzip</th>
                <th>Brotli</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>256kB</td>
                <td>193kB</td>
                <td>25kB</td>
                <td>20kB</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>

  </div>
</template>
