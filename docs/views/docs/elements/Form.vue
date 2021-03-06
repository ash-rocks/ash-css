<template>
  <div>

    <h1>Form</h1>

    <div class="row --flex">

      <div class="toc column -12 -xl-3 --flex-order-first --xl-flex-order-last --xl-self-start">
        <h2 class="h6 --uppercase">On this page</h2>
        <hr/>
        <ul>
          <li><a href="#intro"># Intro</a></li>
          <li><a href="#layout"># Layout</a></li>
          <li><a href="#colors"># Colors</a></li>
          <li><a href="#readonly"># Readonly</a></li>
          <li><a href="#disabled"># Disabled</a></li>
          <li><a href="#sizing"># Sizing</a></li>
          <li><a href="#shape"># Shape</a></li>
          <li><a href="#fieldset"># Fieldset</a></li>
          <li><a href="#dates"># Dates</a></li>
          <li><a href="#color-picker"># Color Picker</a></li>
          <li><a href="#checkbox"># Checkbox</a></li>
          <li><a href="#radio"># Radio</a></li>
          <li><a href="#switch"># Switch</a></li>
          <li><a href="#groups"># Groups</a></li>
        </ul>
      </div>

      <div class="column -12 -xl-9 --flex-order-last --xl-flex-order-first">

        <section>
          <h2 id="intro" class="jump"><a href="#intro"># Intro</a></h2>
          <p>Form elements are classless by default and take up the full width of the parent element.</p>

          <figure>
            <header>
              <input type="text" placeholder="Text">
              <input type="email" placeholder="Email">
              <input type="password" placeholder="Password">
              <select aria-label="Select" required>
                <option value="" selected disabled>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <textarea placeholder="Textarea"></textarea>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;input type=&quot;text&quot; placeholder=&quot;Text&quot;&gt;
                  &lt;input type=&quot;email&quot; placeholder=&quot;Email&quot;&gt;
                  &lt;input type=&quot;password&quot; placeholder=&quot;Password&quot;&gt;
                  &lt;select aria-label=&quot;Select&quot; required&gt;
                    &lt;option value=&quot;&quot; selected disabled&gt;Select&lt;/option&gt;
                    &lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;
                    &lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;
                    &lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;
                  &lt;/select&gt;
                  &lt;textarea placeholder=&quot;Textarea&quot;&gt;&lt;/textarea&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="layout" class="jump"><a href="#layout"># Layout</a></h2>
          <p>Form layouts are controlled by the responsive grid system. <code>row</code> and <code>column</code> classes can be used to make horizontal or vertical forms.</p>

          <figure>
            <header>
              <form>
                <div class="row">
                  <div class="column -md-4">
                    <label for="username-layout1">Username</label>
                    <input type="text" id="username-layout1">
                  </div>
                  <div class="column -md-4">
                    <label for="email-layout1">Email</label>
                    <input type="email" id="email-layout1">
                  </div>
                  <div class="column -md-4">
                    <label for="password-layout1">Password</label>
                    <input type="password" id="password-layout1">
                  </div>
                </div>
                <div class="row">
                  <div class="column -md-4">
                    <label class="checkbox">
                      <input type="checkbox" checked>
                      <span class="toggle"></span> Checkbox
                    </label>
                  </div>
                  <div class="column -md-4">
                    <label class="radio">
                      <input type="radio" name="radio" checked>
                      <span class="toggle"></span> Radio
                    </label>
                  </div>
                  <div class="column -md-4">
                    <label class="switch">
                      <input type="checkbox" name="switch" checked>
                      <span class="toggle"></span> Switch
                    </label>
                  </div>
                </div>
              </form>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;form&gt;
                    &lt;div class=&quot;row&quot;&gt;
                      &lt;div class=&quot;column -md-4&quot;&gt;
                        &lt;label for=&quot;username-layout1&quot;&gt;Username&lt;/label&gt;
                        &lt;input type=&quot;text&quot; id=&quot;username-layout1&quot;&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;column -md-4&quot;&gt;
                        &lt;label for=&quot;email-layout1&quot;&gt;Email&lt;/label&gt;
                        &lt;input type=&quot;email&quot; id=&quot;email-layout1&quot;&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;column -md-4&quot;&gt;
                        &lt;label for=&quot;password-layout1&quot;&gt;Password&lt;/label&gt;
                        &lt;input type=&quot;password&quot; id=&quot;password-layout1&quot;&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;row&quot;&gt;
                      &lt;div class=&quot;column -md-4&quot;&gt;
                        &lt;label class=&quot;checkbox&quot;&gt;
                          &lt;input type=&quot;checkbox&quot; checked&gt;
                          &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Checkbox
                        &lt;/label&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;column -md-4&quot;&gt;
                        &lt;label class=&quot;radio&quot;&gt;
                          &lt;input type=&quot;radio&quot; name=&quot;radio&quot; checked&gt;
                          &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Radio
                        &lt;/label&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;column -md-4&quot;&gt;
                        &lt;label class=&quot;switch&quot;&gt;
                          &lt;input type=&quot;checkbox&quot; name=&quot;switch&quot; checked&gt;
                          &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Switch
                        &lt;/label&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/form&gt;
                </code>
              </pre>
            </div>
          </figure>

          <p>Inline forms must use the <code>-inline</code> modifier to display the proper margins.</p>

          <figure>
            <header>
              <form class="-inline">
                <div class="row">
                  <div class="column -md-2">
                    <label for="username-layout2" class="--align-right">Username</label>
                  </div>
                  <div class="column -md-10">
                    <input type="text" id="username-layout2">
                  </div>
                </div>
                <div class="row">
                  <div class="column -md-2">
                    <label for="email-layout2" class="--align-right">Email</label>
                  </div>
                  <div class="column -md-10">
                    <input type="email" id="email-layout2">
                  </div>
                </div>
                <div class="row">
                  <div class="column -md-2">
                    <label for="password-layout2" class="--align-right">Password</label>
                  </div>
                  <div class="column -md-10">
                    <input type="password" id="password-layout2">
                  </div>
                </div>
              </form>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;form class=&quot;-inline&quot;&gt;
                    &lt;div class=&quot;row&quot;&gt;
                      &lt;div class=&quot;column -md-2&quot;&gt;
                        &lt;label for=&quot;username-layout2&quot; class=&quot;--align-right&quot;&gt;Username&lt;/label&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;column -md-10&quot;&gt;
                        &lt;input type=&quot;text&quot; id=&quot;username-layout2&quot;&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;row&quot;&gt;
                      &lt;div class=&quot;column -md-2&quot;&gt;
                        &lt;label for=&quot;email-layout2&quot; class=&quot;--align-right&quot;&gt;Email&lt;/label&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;column -md-10&quot;&gt;
                        &lt;input type=&quot;email&quot; id=&quot;email-layout2&quot;&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;row&quot;&gt;
                      &lt;div class=&quot;column -md-2&quot;&gt;
                        &lt;label for=&quot;password-layout2&quot; class=&quot;--align-right&quot;&gt;Password&lt;/label&gt;
                      &lt;/div&gt;
                      &lt;div class=&quot;column -md-10&quot;&gt;
                        &lt;input type=&quot;password&quot; id=&quot;password-layout2&quot;&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/form&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="colors" class="jump"><a href="#colors"># Colors</a></h2>
          <p>Inputs have color modifiers available with <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code>. The <code>-light</code> modifier should only be used in the dark theme or inside darker elements.</p>

          <figure>
            <header>
              <input type="text" class="-primary" placeholder="Primary">
              <input type="text" class="-success" placeholder="Success">
              <input type="text" class="-warning" placeholder="Warning">
              <input type="text" class="-danger" placeholder="Danger">
              <input type="text" class="-dark" placeholder="Dark">
              <input type="text" class="-light" placeholder="Light">
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;input type=&quot;text&quot; class=&quot;-primary&quot; placeholder=&quot;Primary&quot;&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="readonly" class="jump"><a href="#readonly"># Readonly</a></h2>
          <p>Inputs can be set to readonly. Just add the <code>readonly</code> attribute.</p>

          <figure>
            <header>
              <input type="text" placeholder="Readonly" readonly>
              <select aria-label="Readonly Select" readonly>
                <option>Readonly</option>
              </select>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;input type=&quot;text&quot; placeholder=&quot;Readonly&quot; readonly&gt;
                  &lt;select aria-label=&quot;Readonly Select&quot; readonly&gt;
                    &lt;option&gt;Readonly&lt;/option&gt;
                  &lt;/select&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="disabled" class="jump"><a href="#disabled"># Disabled</a></h2>
          <p>Inputs can be disabled. Just add the <code>disabled</code> attribute.</p>

          <figure>
            <header>
              <input type="text" placeholder="Disabled" disabled>
              <select aria-label="Disabled Select" disabled>
                <option>Disabled</option>
              </select>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;input type=&quot;text&quot; placeholder=&quot;Disabled&quot; disabled&gt;
                  &lt;select aria-label=&quot;Disabled Select&quot; disabled&gt;
                    &lt;option&gt;Disabled&lt;/option&gt;
                  &lt;/select&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="sizing" class="jump"><a href="#sizing"># Sizing</a></h2>
          <p>Inputs can be sized using the <code>-small</code>, <code>-normal</code>, <code>-medium</code>, and <code>-large</code> modifiers.</p>

          <figure>
            <header>
              <input type="text" class="-small" placeholder="Small">
              <input type="text" class="-normal" placeholder="Normal">
              <input type="text" class="-medium" placeholder="Medium">
              <input type="text" class="-large" placeholder="Large">
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;input type=&quot;text&quot; class=&quot;-small&quot; placeholder=&quot;Small&quot;&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="shape" class="jump"><a href="#shape"># Shape</a></h2>
          <p>You can change the shape of inputs by using the <router-link :to="{ name: 'utilities.border', hash: '#radius'}">border radius utility</router-link>.</p>

          <figure>
            <header>
              <input type="text" class="--rectangle" placeholder="Rectangle">
              <input type="text" class="--rounded-sm" placeholder="Rounded Small">
              <input type="text" class="--rounded" placeholder="Rounded">
              <input type="text" class="--rounded-lg" placeholder="Rounded Large">
              <input type="text" class="--rounded-full" placeholder="Rounded Full">
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;input type=&quot;text&quot; class=&quot;--rectangle&quot; placeholder=&quot;Rectangle&quot;&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="fieldset" class="jump"><a href="#fieldset"># Fieldset</a></h2>
          <p>Fieldsets can be used to group inputs and other elements together. To add a header to the fieldset, use a <code>legend</code> element. The grid system should be used inside of a fieldset.</p>

          <figure>
            <header>
              <form>
                <fieldset>
                  <legend>Login Information</legend>
                  <div class="row">
                    <div class="column col-md-4">
                      <label for="username">Username</label>
                      <input type="text" id="username" name="username">
                    </div>
                    <div class="column col-md-4">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email">
                    </div>
                    <div class="column col-md-4">
                      <label for="password">Password</label>
                      <input type="password" id="password" name="password">
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Personal Information</legend>
                  <div class="row">
                    <div class="column col-md-4">
                      <label for="name">Full Name</label>
                      <input type="text" id="name" name="name">
                    </div>
                    <div class="column col-md-4">
                      <label for="state">State</label>
                      <input type="text" id="state" name="state">
                    </div>
                    <div class="column col-md-4">
                      <label for="zip">Zip</label>
                      <input type="text" id="zip" name="zip">
                    </div>
                  </div>
                </fieldset>
              </form>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;fieldset&gt;
                    &lt;legend&gt;Login Information&lt;/legend&gt;
                    &lt;div class=&quot;row&quot;&gt;
                    ...
                    &lt;/div&gt;
                  &lt;/fieldset&gt;
                  &lt;fieldset&gt;
                    &lt;legend&gt;Personal Information&lt;/legend&gt;
                    &lt;div class=&quot;row&quot;&gt;
                    ...
                    &lt;/div&gt;
                  &lt;/fieldset&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="dates" class="jump"><a href="#dates"># Dates</a></h2>
          <p>Date pickers are classless and use the browsers built-in picker.</p>

          <figure>
            <header>
              <label for="date">Date</label>
              <input type="date" id="date">
              <label for="datetime">Datetime</label>
              <input type="datetime-local" id="datetime">
              <label for="time">Time</label>
              <input type="time" id="time">
              <label for="week">Week</label>
              <input type="week" id="week">
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;label for=&quot;date&quot;&gt;Date&lt;/label&gt;
                  &lt;input type=&quot;date&quot; id=&quot;date&quot;&gt;
                  &lt;label for=&quot;datetime&quot;&gt;Datetime&lt;/label&gt;
                  &lt;input type=&quot;datetime-local&quot; id=&quot;datetime&quot;&gt;
                  &lt;label for=&quot;time&quot;&gt;Time&lt;/label&gt;
                  &lt;input type=&quot;time&quot; id=&quot;time&quot;&gt;
                  &lt;label for=&quot;week&quot;&gt;Week&lt;/label&gt;
                  &lt;input type=&quot;week&quot; id=&quot;week&quot;&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="color-picker" class="jump"><a href="#color-picker"># Color Picker</a></h2>
          <p>Color pickers are classless and use the browsers built-in picker.</p>

          <figure>
            <header>
              <label for="color">Color</label>
              <input type="color" id="color">
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;label for=&quot;color&quot;&gt;Color&lt;/label&gt;
                  &lt;input type=&quot;color&quot; id=&quot;color&quot;&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="checkbox" class="jump"><a href="#checkbox"># Checkbox</a></h2>
          <p>Checkboxes are created by placing the input along with a <code>toggle</code> classed inline element inside a <code>label</code> with the <code>checkbox</code> class. You can change the color of checkboxes by using the <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code> modifiers on the <code>label</code> element.</p>

          <figure>
            <header>
              <label class="checkbox">
                <input type="checkbox" checked>
                <span class="toggle"></span> Checkbox
              </label>
              <label class="checkbox -primary">
                <input type="checkbox" checked>
                <span class="toggle"></span> Primary
              </label>
              <label class="checkbox -success">
                <input type="checkbox" checked>
                <span class="toggle"></span> Success
              </label>
              <label class="checkbox -warning">
                <input type="checkbox" checked>
                <span class="toggle"></span> Warning
              </label>
              <label class="checkbox -danger">
                <input type="checkbox" checked>
                <span class="toggle"></span> Danger
              </label>
              <label class="checkbox -dark">
                <input type="checkbox" checked>
                <span class="toggle"></span> Dark
              </label>
              <label class="checkbox -light">
                <input type="checkbox" checked>
                <span class="toggle"></span> Light
              </label>
              <label class="checkbox -block">
                <input type="checkbox" checked>
                <span class="toggle"></span> Blocked
              </label>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;label class=&quot;checkbox&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; checked&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Checkbox
                  &lt;/label&gt;
                  &lt;label class=&quot;checkbox -primary&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; checked&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Primary
                  &lt;/label&gt;
                  &lt;label class=&quot;checkbox -block&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; checked&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Blocked
                  &lt;/label&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="radio" class="jump"><a href="#radio"># Radio</a></h2>
          <p>Radios are created by placing the input along with a <code>toggle</code> classed inline element inside a <code>label</code> with the <code>radio</code> class. You can change the color of radios by using the <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code> modifiers on the <code>label</code> element.</p>

          <figure>
            <header>
              <label class="radio">
                <input type="radio" name="radio" checked>
                <span class="toggle"></span> Radio
              </label>
              <label class="radio -primary">
                <input type="radio" name="radio">
                <span class="toggle"></span> Primary
              </label>
              <label class="radio -success">
                <input type="radio" name="radio">
                <span class="toggle"></span> Success
              </label>
              <label class="radio -warning">
                <input type="radio" name="radio">
                <span class="toggle"></span> Warning
              </label>
              <label class="radio -danger">
                <input type="radio" name="radio">
                <span class="toggle"></span> Danger
              </label>
              <label class="radio -dark">
                <input type="radio" name="radio">
                <span class="toggle"></span> Dark
              </label>
              <label class="radio -light">
                <input type="radio" name="radio">
                <span class="toggle"></span> Light
              </label>
              <label class="radio -block">
                <input type="radio" name="radio">
                <span class="toggle"></span> Blocked
              </label>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;label class=&quot;radio&quot;&gt;
                    &lt;input type=&quot;radio&quot; name=&quot;radio&quot; checked&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Radio
                  &lt;/label&gt;
                  &lt;label class=&quot;radio -primary&quot;&gt;
                    &lt;input type=&quot;radio&quot; name=&quot;radio&quot;&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Primary
                  &lt;/label&gt;
                  &lt;label class=&quot;radio -block&quot;&gt;
                    &lt;input type=&quot;radio&quot; name=&quot;radio&quot;&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Blocked
                  &lt;/label&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="switch" class="jump"><a href="#switch"># Switch</a></h2>
          <p>Switches are created by placing the checkbox or radio input along with a <code>toggle</code> classed inline element inside a <code>label</code> with the <code>switch</code> class. You can change the color of switches by using the <code>-primary</code>, <code>-success</code>, <code>-warning</code>, <code>-danger</code>, <code>-dark</code>, and <code>-light</code> modifiers on the <code>label</code> element.</p>

          <figure>
            <header>
              <label class="switch">
                <input type="checkbox" name="switch" checked>
                <span class="toggle"></span> Switch
              </label>
              <label class="switch -primary">
                <input type="checkbox" name="switch">
                <span class="toggle"></span> Primary
              </label>
              <label class="switch -success">
                <input type="checkbox" name="switch">
                <span class="toggle"></span> Success
              </label>
              <label class="switch -warning">
                <input type="checkbox" name="switch">
                <span class="toggle"></span> Warning
              </label>
              <label class="switch -danger">
                <input type="checkbox" name="switch">
                <span class="toggle"></span> Danger
              </label>
              <label class="switch -dark">
                <input type="checkbox" name="switch">
                <span class="toggle"></span> Dark
              </label>
              <label class="switch -light">
                <input type="checkbox" name="switch">
                <span class="toggle"></span> Light
              </label>
              <label class="switch -block">
                <input type="checkbox" name="switch">
                <span class="toggle"></span> Blocked
              </label>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;label class=&quot;switch&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; name=&quot;switch&quot; checked&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Switch
                  &lt;/label&gt;
                  &lt;label class=&quot;switch -primary&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; name=&quot;switch&quot;&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Primary
                  &lt;/label&gt;
                  &lt;label class=&quot;switch -block&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; name=&quot;switch&quot;&gt;
                    &lt;span class=&quot;toggle&quot;&gt;&lt;/span&gt; Blocked
                  &lt;/label&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

        <section>
          <h2 id="groups" class="jump"><a href="#groups"># Groups</a></h2>
          <p>You can group together inputs and buttons by wrapping them in a <code>inputs</code> container. Elements will have their left and right margins removed. The <code>addon</code> class can be applied to buttons to match the styling of inputs.</p>

          <figure>
            <header>
              <div class="inputs">
                <input type="text" placeholder="search">
                <button class="button -primary">Search</button>
              </div>
              <div class="inputs">
                <input type="text" class="--rounded-left-full" placeholder="search">
                <button type="submit" class="addon --rounded-right-full" aria-label="search"><i class="lni lni-search-alt"></i></button>
              </div>
            </header>
            <div class="content --padding-0">
              <pre class="--margin-0">
                <code class="language-html">
                  &lt;div class=&quot;inputs&quot;&gt;
                    &lt;input type=&quot;text&quot; placeholder=&quot;search&quot;&gt;
                    &lt;button class=&quot;button -primary&quot;&gt;Search&lt;/button&gt;
                  &lt;/div&gt;
                  &lt;div class=&quot;inputs&quot;&gt;
                    &lt;input type=&quot;text&quot; class=&quot;--rounded-left-full&quot; placeholder=&quot;search&quot;&gt;
                    &lt;button type=&quot;submit&quot; class=&quot;addon --rounded-right-full&quot; aria-label=&quot;search&quot;&gt;&lt;i class=&quot;lni lni-search-alt&quot;&gt;&lt;/i&gt;&lt;/button&gt;
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </figure>
        </section>

      </div>
    </div>

  </div>
</template>
