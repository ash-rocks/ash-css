<template>
  <div>

    <h1>Modals</h1>
    <div class="row">
      <div class="column">
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#headers"># Headers</a></li>
          <li><a href="#footers"># Footers</a></li>
          <li><a href="#actions"># Actions</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#scrollable"># Scrollable</a></li>
          <li><a href="#sizing"># Sizing</a></li>
          <li><a href="#lightbox"># Lightbox</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
        <p>Modals are displayed on top of the page content to notify the user of a status or action. Modals are pure CSS and use no JavaScript. Modals are open and closed by using lables and checkboxes. If you use a label with a <code>for</code> that matches the checkbox as the overlay then clicking the overlay will close the modal.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <label class="button" for="modal-simple">Simple Modal</label>
            <input class="modal-toggle" id="modal-simple" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-simple"></label>
              <div class="dialog">
                <label class="close" for="modal-simple"><i class="fas fa-times"></i></label>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;label class=&quot;button&quot; for=&quot;modal-simple&quot;&gt;Simple Modal&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-simple&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-simple&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog&quot;&gt;
    &lt;label class=&quot;close&quot; for=&quot;modal-simple&quot;&gt;&lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;&lt;/label&gt;
    &lt;div class=&quot;content&quot;&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="headers" class="jump"><a href="#headers"># Headers</a></h2>
        <p>Modals can have <code>header</code> elements.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <label class="button" for="modal-header">Modal With Header</label>
            <input class="modal-toggle" id="modal-header" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-header"></label>
              <div class="dialog">
                <label class="close" for="modal-header"><i class="fas fa-times"></i></label>
                <header>
                  HEADER
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;label class=&quot;button&quot; for=&quot;modal-header&quot;&gt;Modal With Header&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-header&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-header&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog&quot;&gt;
    &lt;label class=&quot;close&quot; for=&quot;modal-header&quot;&gt;&lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;&lt;/label&gt;
    &lt;header&gt;
      HEADER
    &lt;/header&gt;
    &lt;div class=&quot;content&quot;&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="footers" class="jump"><a href="#footers"># Footers</a></h2>
        <p>Modals can have <code>footer</code> elements.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <label class="button" for="modal-footer">Modal With Footer</label>
            <input class="modal-toggle" id="modal-footer" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-footer"></label>
              <div class="dialog">
                <label class="close" for="modal-footer"><i class="fas fa-times"></i></label>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <footer>
                  FOOTER
                </footer>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;label class=&quot;button&quot; for=&quot;modal-footer&quot;&gt;Modal With Footer&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-footer&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-footer&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog&quot;&gt;
    &lt;label class=&quot;close&quot; for=&quot;modal-footer&quot;&gt;&lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;&lt;/label&gt;
    &lt;div class=&quot;content&quot;&gt;
      ...
    &lt;/div&gt;
    &lt;footer&gt;
      FOOTER
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="actions" class="jump"><a href="#actions"># Actions</a></h2>
        <p>Modals can have an <code>actions</code> classed element added to create flexed and bordered anchors or button groups.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <label class="button" for="modal-4">Modal With Action</label>
            <input class="modal-toggle" id="modal-4" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-4"></label>
              <div class="dialog">
                <label class="close" for="modal-4"><i class="fas fa-times"></i></label>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div class="actions">
                  <a href="">Action</a>
                  <a href="">Action</a>
                  <button class="primary">Action</button>
                </div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;label class=&quot;button&quot; for=&quot;modal-4&quot;&gt;Modal With Action&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-4&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-4&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog&quot;&gt;
    &lt;label class=&quot;close&quot; for=&quot;modal-4&quot;&gt;&lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;&lt;/label&gt;
    &lt;div class=&quot;content&quot;&gt;
      ...
    &lt;/div&gt;
    &lt;div class=&quot;actions&quot;&gt;
      &lt;a href=&quot;&quot;&gt;Action&lt;/a&gt;
      &lt;a href=&quot;&quot;&gt;Action&lt;/a&gt;
      &lt;button class=&quot;primary&quot;&gt;Action&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
        <p>Modals have color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <label class="button" for="modal-primary">Primary</label>
            <input class="modal-toggle" id="modal-primary" type="checkbox" />
            <div class="modal -primary">
              <label class="overlay" for="modal-primary"></label>
              <div class="dialog">
                <label class="close" for="modal-primary"><i class="fas fa-times"></i></label>
                <header>
                  PRIMARY
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div class="actions">
                  <a href="">Action</a>
                  <a href="">Action</a>
                  <button class="-success">Action</button>
                </div>
              </div>
            </div>

            <label class="button" for="modal-success">Success</label>
            <input class="modal-toggle" id="modal-success" type="checkbox" />
            <div class="modal -success">
              <label class="overlay" for="modal-success"></label>
              <div class="dialog">
                <label class="close" for="modal-success"><i class="fas fa-times"></i></label>
                <header>
                  SUCCESS
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div class="actions">
                  <a href="">Action</a>
                  <a href="">Action</a>
                  <button class="-warning">Action</button>
                </div>
              </div>
            </div>

            <label class="button" for="modal-warning">Warning</label>
            <input class="modal-toggle" id="modal-warning" type="checkbox" />
            <div class="modal -warning">
              <label class="overlay" for="modal-warning"></label>
              <div class="dialog">
                <label class="close" for="modal-warning"><i class="fas fa-times"></i></label>
                <header>
                  WARNING
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div class="actions">
                  <a href="">Action</a>
                  <a href="">Action</a>
                  <button class="-danger">Action</button>
                </div>
              </div>
            </div>

            <label class="button" for="modal-danger">Danger</label>
            <input class="modal-toggle" id="modal-danger" type="checkbox" />
            <div class="modal -danger">
              <label class="overlay" for="modal-danger"></label>
              <div class="dialog">
                <label class="close" for="modal-danger"><i class="fas fa-times"></i></label>
                <header>
                  DANGER
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div class="actions">
                  <a href="">Action</a>
                  <a href="">Action</a>
                  <button class="-dark">Action</button>
                </div>
              </div>
            </div>

            <label class="button" for="modal-dark">Dark</label>
            <input class="modal-toggle" id="modal-dark" type="checkbox" />
            <div class="modal -dark">
              <label class="overlay" for="modal-dark"></label>
              <div class="dialog">
                <label class="close" for="modal-dark"><i class="fas fa-times"></i></label>
                <header>
                  DARK
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div class="actions">
                  <a href="">Action</a>
                  <a href="">Action</a>
                  <button class="-light">Action</button>
                </div>
              </div>
            </div>

            <label class="button" for="modal-light">Light</label>
            <input class="modal-toggle" id="modal-light" type="checkbox" />
            <div class="modal -light">
              <label class="overlay" for="modal-light"></label>
              <div class="dialog">
                <label class="close" for="modal-light"><i class="fas fa-times"></i></label>
                <header>
                  LIGHT
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium ipsum non mauris sollicitudin viverra. Quisque non nisl at nisi tincidunt gravida. Suspendisse placerat massa quis mi ultrices fermentum. In purus magna, consequat non imperdiet a, tempus non magna. Quisque ante metus, dapibus in odio at, volutpat vehicula lorem. Proin viverra feugiat magna. Duis nec tellus vel ante pellentesque hendrerit vel et lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div class="actions">
                  <a href="">Action</a>
                  <a href="">Action</a>
                  <button class="-primary">Action</button>
                </div>
              </div>
            </div>

          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;label class=&quot;button&quot; for=&quot;modal-primary&quot;&gt;Primary&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-primary&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal -primary&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-primary&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog&quot;&gt;
    &lt;label class=&quot;close&quot; for=&quot;modal-primary&quot;&gt;&lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;&lt;/label&gt;
    &lt;header&gt;
      PRIMARY
    &lt;/header&gt;
    &lt;div class=&quot;content&quot;&gt;
      ...
    &lt;/div&gt;
    &lt;div class=&quot;actions&quot;&gt;
      &lt;a href=&quot;&quot;&gt;Action&lt;/a&gt;
      &lt;a href=&quot;&quot;&gt;Action&lt;/a&gt;
      &lt;button class=&quot;-success&quot;&gt;Action&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="scrollable" class="jump"><a href="#scrollable"># Scrollable</a></h2>
        <p>Modals have a max-height and are scrollable on overflow when content doesn't fit.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <label class="button" for="modal-5">Scrollable Modal</label>
            <input class="modal-toggle" id="modal-5" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-5"></label>
              <div class="dialog">
                <label class="close" for="modal-5"><i class="fas fa-times"></i></label>
                <header>
                  HEADER
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis massa sit amet dolor imperdiet laoreet non eget purus. Etiam in tortor auctor, sodales metus sed, commodo mauris. Quisque elementum facilisis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean dolor dolor, aliquet sit amet vehicula sed, varius in enim. Duis lacinia nulla tristique, porttitor nulla a, condimentum erat. In hac habitasse platea dictumst. Fusce in purus vulputate mauris iaculis tristique. Donec sed justo consequat tortor sodales posuere non ut velit.</p>
                  <p>Vivamus ullamcorper sapien eget lectus ultricies consectetur. Cras molestie lobortis magna, eu finibus mauris maximus efficitur. Quisque vel porta dui. Suspendisse ut interdum mi. Integer pharetra nulla erat, ac malesuada erat bibendum nec. Sed vehicula non elit non placerat. Ut porttitor dolor feugiat augue laoreet, nec pellentesque tortor ornare. Pellentesque quis bibendum justo, et malesuada nulla. Nullam at vestibulum quam. Nam congue pulvinar finibus. Fusce efficitur nunc sit amet quam rutrum efficitur vel ut tellus. Donec finibus nec ipsum id consectetur. Ut mollis mattis justo eget efficitur.</p>
                  <p>Praesent tempor orci tellus, ut facilisis lectus semper pretium. Nulla facilisi. Nam ut libero mi. Nulla volutpat accumsan orci, vel cursus nulla aliquam at. Ut tempus ante lectus, nec lobortis justo blandit luctus. Pellentesque vitae massa bibendum, finibus urna ac, ultricies elit. Aliquam sit amet metus odio. Mauris luctus mi auctor nisi porta imperdiet. Etiam blandit luctus justo.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sed vehicula urna, sit amet ornare mauris. Proin varius non velit in luctus. Cras cursus porta nisi, ac dignissim ligula tempor vitae. Quisque accumsan in arcu molestie molestie. Morbi vel ullamcorper metus, vitae facilisis quam. Proin eget erat mauris. Phasellus eget condimentum leo, ac condimentum felis. Sed eu scelerisque mauris. Sed fermentum ultricies tellus eget porttitor. Etiam sed nisl eu elit gravida posuere ac ut nulla.</p>
                </div>
                <footer>
                  FOOTER
                </footer>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;label class=&quot;button&quot; for=&quot;modal-5&quot;&gt;Scrollable Modal&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-5&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-5&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog&quot;&gt;
    &lt;label class=&quot;close&quot; for=&quot;modal-5&quot;&gt;&lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;&lt;/label&gt;
    &lt;header&gt;
      HEADER
    &lt;/header&gt;
    &lt;div class=&quot;content&quot;&gt;
      ...
    &lt;/div&gt;
    &lt;footer&gt;
      FOOTER
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="sizing" class="jump"><a href="#sizing"># Sizing</a></h2>
        <p>Modals can be sized using the <code>-small</code>, <code>-normal</code>, <code>-medium</code>, and <code>-large</code> classes on the <code>dialog</code> element.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <label class="button" for="modal-6">Small Modal</label>
            <input class="modal-toggle" id="modal-6" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-6"></label>
              <div class="dialog -small">
                <label class="close" for="modal-6"><i class="fas fa-times"></i></label>
                <header>
                  HEADER
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis massa sit amet dolor imperdiet laoreet non eget purus. Etiam in tortor auctor, sodales metus sed, commodo mauris. Quisque elementum facilisis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean dolor dolor, aliquet sit amet vehicula sed, varius in enim. Duis lacinia nulla tristique, porttitor nulla a, condimentum erat. In hac habitasse platea dictumst. Fusce in purus vulputate mauris iaculis tristique. Donec sed justo consequat tortor sodales posuere non ut velit.</p>
                  <p>Vivamus ullamcorper sapien eget lectus ultricies consectetur. Cras molestie lobortis magna, eu finibus mauris maximus efficitur. Quisque vel porta dui. Suspendisse ut interdum mi. Integer pharetra nulla erat, ac malesuada erat bibendum nec. Sed vehicula non elit non placerat. Ut porttitor dolor feugiat augue laoreet, nec pellentesque tortor ornare. Pellentesque quis bibendum justo, et malesuada nulla. Nullam at vestibulum quam. Nam congue pulvinar finibus. Fusce efficitur nunc sit amet quam rutrum efficitur vel ut tellus. Donec finibus nec ipsum id consectetur. Ut mollis mattis justo eget efficitur.</p>
                  <p>Praesent tempor orci tellus, ut facilisis lectus semper pretium. Nulla facilisi. Nam ut libero mi. Nulla volutpat accumsan orci, vel cursus nulla aliquam at. Ut tempus ante lectus, nec lobortis justo blandit luctus. Pellentesque vitae massa bibendum, finibus urna ac, ultricies elit. Aliquam sit amet metus odio. Mauris luctus mi auctor nisi porta imperdiet. Etiam blandit luctus justo.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sed vehicula urna, sit amet ornare mauris. Proin varius non velit in luctus. Cras cursus porta nisi, ac dignissim ligula tempor vitae. Quisque accumsan in arcu molestie molestie. Morbi vel ullamcorper metus, vitae facilisis quam. Proin eget erat mauris. Phasellus eget condimentum leo, ac condimentum felis. Sed eu scelerisque mauris. Sed fermentum ultricies tellus eget porttitor. Etiam sed nisl eu elit gravida posuere ac ut nulla.</p>
                </div>
                <footer>
                  FOOTER
                </footer>
              </div>
            </div>
            <label class="button" for="modal-7">Normal Modal</label>
            <input class="modal-toggle" id="modal-7" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-7"></label>
              <div class="dialog -normal">
                <label class="close" for="modal-7"><i class="fas fa-times"></i></label>
                <header>
                  HEADER
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis massa sit amet dolor imperdiet laoreet non eget purus. Etiam in tortor auctor, sodales metus sed, commodo mauris. Quisque elementum facilisis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean dolor dolor, aliquet sit amet vehicula sed, varius in enim. Duis lacinia nulla tristique, porttitor nulla a, condimentum erat. In hac habitasse platea dictumst. Fusce in purus vulputate mauris iaculis tristique. Donec sed justo consequat tortor sodales posuere non ut velit.</p>
                  <p>Vivamus ullamcorper sapien eget lectus ultricies consectetur. Cras molestie lobortis magna, eu finibus mauris maximus efficitur. Quisque vel porta dui. Suspendisse ut interdum mi. Integer pharetra nulla erat, ac malesuada erat bibendum nec. Sed vehicula non elit non placerat. Ut porttitor dolor feugiat augue laoreet, nec pellentesque tortor ornare. Pellentesque quis bibendum justo, et malesuada nulla. Nullam at vestibulum quam. Nam congue pulvinar finibus. Fusce efficitur nunc sit amet quam rutrum efficitur vel ut tellus. Donec finibus nec ipsum id consectetur. Ut mollis mattis justo eget efficitur.</p>
                  <p>Praesent tempor orci tellus, ut facilisis lectus semper pretium. Nulla facilisi. Nam ut libero mi. Nulla volutpat accumsan orci, vel cursus nulla aliquam at. Ut tempus ante lectus, nec lobortis justo blandit luctus. Pellentesque vitae massa bibendum, finibus urna ac, ultricies elit. Aliquam sit amet metus odio. Mauris luctus mi auctor nisi porta imperdiet. Etiam blandit luctus justo.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sed vehicula urna, sit amet ornare mauris. Proin varius non velit in luctus. Cras cursus porta nisi, ac dignissim ligula tempor vitae. Quisque accumsan in arcu molestie molestie. Morbi vel ullamcorper metus, vitae facilisis quam. Proin eget erat mauris. Phasellus eget condimentum leo, ac condimentum felis. Sed eu scelerisque mauris. Sed fermentum ultricies tellus eget porttitor. Etiam sed nisl eu elit gravida posuere ac ut nulla.</p>
                </div>
                <footer>
                  FOOTER
                </footer>
              </div>
            </div>
            <label class="button" for="modal-8">Medium Modal</label>
            <input class="modal-toggle" id="modal-8" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-8"></label>
              <div class="dialog -medium">
                <label class="close" for="modal-8"><i class="fas fa-times"></i></label>
                <header>
                  HEADER
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis massa sit amet dolor imperdiet laoreet non eget purus. Etiam in tortor auctor, sodales metus sed, commodo mauris. Quisque elementum facilisis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean dolor dolor, aliquet sit amet vehicula sed, varius in enim. Duis lacinia nulla tristique, porttitor nulla a, condimentum erat. In hac habitasse platea dictumst. Fusce in purus vulputate mauris iaculis tristique. Donec sed justo consequat tortor sodales posuere non ut velit.</p>
                  <p>Vivamus ullamcorper sapien eget lectus ultricies consectetur. Cras molestie lobortis magna, eu finibus mauris maximus efficitur. Quisque vel porta dui. Suspendisse ut interdum mi. Integer pharetra nulla erat, ac malesuada erat bibendum nec. Sed vehicula non elit non placerat. Ut porttitor dolor feugiat augue laoreet, nec pellentesque tortor ornare. Pellentesque quis bibendum justo, et malesuada nulla. Nullam at vestibulum quam. Nam congue pulvinar finibus. Fusce efficitur nunc sit amet quam rutrum efficitur vel ut tellus. Donec finibus nec ipsum id consectetur. Ut mollis mattis justo eget efficitur.</p>
                  <p>Praesent tempor orci tellus, ut facilisis lectus semper pretium. Nulla facilisi. Nam ut libero mi. Nulla volutpat accumsan orci, vel cursus nulla aliquam at. Ut tempus ante lectus, nec lobortis justo blandit luctus. Pellentesque vitae massa bibendum, finibus urna ac, ultricies elit. Aliquam sit amet metus odio. Mauris luctus mi auctor nisi porta imperdiet. Etiam blandit luctus justo.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sed vehicula urna, sit amet ornare mauris. Proin varius non velit in luctus. Cras cursus porta nisi, ac dignissim ligula tempor vitae. Quisque accumsan in arcu molestie molestie. Morbi vel ullamcorper metus, vitae facilisis quam. Proin eget erat mauris. Phasellus eget condimentum leo, ac condimentum felis. Sed eu scelerisque mauris. Sed fermentum ultricies tellus eget porttitor. Etiam sed nisl eu elit gravida posuere ac ut nulla.</p>
                </div>
                <footer>
                  FOOTER
                </footer>
              </div>
            </div>
            <label class="button" for="modal-9">Large Modal</label>
            <input class="modal-toggle" id="modal-9" type="checkbox" />
            <div class="modal">
              <label class="overlay" for="modal-9"></label>
              <div class="dialog -large">
                <label class="close" for="modal-9"><i class="fas fa-times"></i></label>
                <header>
                  HEADER
                </header>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis massa sit amet dolor imperdiet laoreet non eget purus. Etiam in tortor auctor, sodales metus sed, commodo mauris. Quisque elementum facilisis ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean dolor dolor, aliquet sit amet vehicula sed, varius in enim. Duis lacinia nulla tristique, porttitor nulla a, condimentum erat. In hac habitasse platea dictumst. Fusce in purus vulputate mauris iaculis tristique. Donec sed justo consequat tortor sodales posuere non ut velit.</p>
                  <p>Vivamus ullamcorper sapien eget lectus ultricies consectetur. Cras molestie lobortis magna, eu finibus mauris maximus efficitur. Quisque vel porta dui. Suspendisse ut interdum mi. Integer pharetra nulla erat, ac malesuada erat bibendum nec. Sed vehicula non elit non placerat. Ut porttitor dolor feugiat augue laoreet, nec pellentesque tortor ornare. Pellentesque quis bibendum justo, et malesuada nulla. Nullam at vestibulum quam. Nam congue pulvinar finibus. Fusce efficitur nunc sit amet quam rutrum efficitur vel ut tellus. Donec finibus nec ipsum id consectetur. Ut mollis mattis justo eget efficitur.</p>
                  <p>Praesent tempor orci tellus, ut facilisis lectus semper pretium. Nulla facilisi. Nam ut libero mi. Nulla volutpat accumsan orci, vel cursus nulla aliquam at. Ut tempus ante lectus, nec lobortis justo blandit luctus. Pellentesque vitae massa bibendum, finibus urna ac, ultricies elit. Aliquam sit amet metus odio. Mauris luctus mi auctor nisi porta imperdiet. Etiam blandit luctus justo.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sed vehicula urna, sit amet ornare mauris. Proin varius non velit in luctus. Cras cursus porta nisi, ac dignissim ligula tempor vitae. Quisque accumsan in arcu molestie molestie. Morbi vel ullamcorper metus, vitae facilisis quam. Proin eget erat mauris. Phasellus eget condimentum leo, ac condimentum felis. Sed eu scelerisque mauris. Sed fermentum ultricies tellus eget porttitor. Etiam sed nisl eu elit gravida posuere ac ut nulla.</p>
                </div>
                <footer>
                  FOOTER
                </footer>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;label class=&quot;button&quot; for=&quot;modal-6&quot;&gt;Small Modal&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-6&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-6&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog -small&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
&lt;label class=&quot;button&quot; for=&quot;modal-7&quot;&gt;Normal Modal&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-7&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-7&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog -normal&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
&lt;label class=&quot;button&quot; for=&quot;modal-8&quot;&gt;Medium Modal&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-8&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-8&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog -medium&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
&lt;label class=&quot;button&quot; for=&quot;modal-9&quot;&gt;Large Modal&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-9&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-9&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog -large&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
              </code>
            </pre>
          </div>
        </figure>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h2 id="lightbox" class="jump"><a href="#lightbox"># Lightbox</a></h2>
        <p>Modals can be used as a lightbox by using the <code>-lightbox</code> modifier on the modal class. Construct the modal as normal but the only element in the content should be an image. To make a lightbox completely responsive you should also add the <code>-portrait</code> or <code>-landscape</code> modifier.</p>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <figure>
          <header>
            <label class="button" for="modal-lightbox">Lightbox</label>
            <input class="modal-toggle" id="modal-lightbox" type="checkbox" />
            <div class="modal -lightbox -landscape">
              <label class="overlay" for="modal-lightbox"></label>
              <div class="dialog">
                <label class="close" for="modal-lightbox"><i class="fas fa-times"></i></label>
                <div class="content">
                  <img src="/images/placeholder.png">
                </div>
              </div>
            </div>
          </header>
          <div class="content --padding-0">
            <pre class="--margin-0">
              <code class="language-html">
&lt;label class=&quot;button&quot; for=&quot;modal-lightbox&quot;&gt;Lightbox&lt;/label&gt;
&lt;input class=&quot;modal-toggle&quot; id=&quot;modal-lightbox&quot; type=&quot;checkbox&quot; /&gt;
&lt;div class=&quot;modal -lightbox -landscape&quot;&gt;
  &lt;label class=&quot;overlay&quot; for=&quot;modal-lightbox&quot;&gt;&lt;/label&gt;
  &lt;div class=&quot;dialog&quot;&gt;
    &lt;label class=&quot;close&quot; for=&quot;modal-lightbox&quot;&gt;&lt;i class=&quot;fas fa-times&quot;&gt;&lt;/i&gt;&lt;/label&gt;
    &lt;div class=&quot;content&quot;&gt;
      &lt;img src=&quot;/images/placeholder.png&quot;&gt;
    &lt;/div&gt;
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
