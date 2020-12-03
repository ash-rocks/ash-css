<template>
  <div>

    <h1>Tabs</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Tabs can be created by using a <code>tabs</code> classed container with radios, labels, and a <code>content</code> classed element for each tab.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <div class="tabs">
              <input name="tabs" type="radio" id="tab-one" checked="checked" class="input"/>
              <label for="tab-one" class="label --uppercase">Tab One</label>
              <div class="content">
                <h1 class="--uppercase">Tab One</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec gravida purus. Fusce bibendum sit amet mauris sed gravida. Ut in felis quam. Nunc cursus purus facilisis ante tempus, sit amet accumsan dui gravida. Pellentesque hendrerit a enim nec tempor. Morbi tortor justo, ultricies volutpat condimentum sed, bibendum sed urna. Mauris viverra condimentum nunc, sit amet sagittis leo sagittis at. Donec at vehicula libero. Donec pretium vitae enim sodales tristique. Sed vulputate erat ac vulputate consequat. Vestibulum fermentum diam quis pretium ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>

              <input name="tabs" type="radio" id="tab-two" class="input"/>
              <label for="tab-two" class="label --uppercase">Tab Two</label>
              <div class="content">
                <h1 class="--uppercase">Tab Two</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec gravida purus. Fusce bibendum sit amet mauris sed gravida. Ut in felis quam. Nunc cursus purus facilisis ante tempus, sit amet accumsan dui gravida. Pellentesque hendrerit a enim nec tempor. Morbi tortor justo, ultricies volutpat condimentum sed, bibendum sed urna. Mauris viverra condimentum nunc, sit amet sagittis leo sagittis at. Donec at vehicula libero. Donec pretium vitae enim sodales tristique. Sed vulputate erat ac vulputate consequat. Vestibulum fermentum diam quis pretium ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>

              <input name="tabs" type="radio" id="tab-three" class="input"/>
              <label for="tab-three" class="label --uppercase">Tab Three</label>
              <div class="content">
                <h1 class="--uppercase">Tab Three</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec gravida purus. Fusce bibendum sit amet mauris sed gravida. Ut in felis quam. Nunc cursus purus facilisis ante tempus, sit amet accumsan dui gravida. Pellentesque hendrerit a enim nec tempor. Morbi tortor justo, ultricies volutpat condimentum sed, bibendum sed urna. Mauris viverra condimentum nunc, sit amet sagittis leo sagittis at. Donec at vehicula libero. Donec pretium vitae enim sodales tristique. Sed vulputate erat ac vulputate consequat. Vestibulum fermentum diam quis pretium ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;div class=&quot;tabs&quot;&gt;
  &lt;input name=&quot;tabs&quot; type=&quot;radio&quot; id=&quot;tab-1&quot; checked=&quot;checked&quot; class=&quot;input&quot;/&gt;
  &lt;label for=&quot;tab-1&quot; class=&quot;label&quot;&gt;Tab 1&lt;/label&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;

  &lt;input name=&quot;tabs&quot; type=&quot;radio&quot; id=&quot;tab-2&quot; class=&quot;input&quot;/&gt;
  &lt;label for=&quot;tab-2&quot; class=&quot;label&quot;&gt;Tab 2&lt;/label&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;

  &lt;input name=&quot;tabs&quot; type=&quot;radio&quot; id=&quot;tab-3&quot; class=&quot;input&quot;/&gt;
  &lt;label for=&quot;tab-3&quot; class=&quot;label&quot;&gt;Tab 3&lt;/label&gt;
  &lt;div class=&quot;content&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

  </div>
</template>
