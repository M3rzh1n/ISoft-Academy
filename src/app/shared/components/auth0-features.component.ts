import { Component } from '@angular/core';

@Component({
  selector: 'app-auth0-features',
  template: `
    <div class="auth0-features">
      <h2 class="auth0-features__title">Explore Auth0 Features</h2>
      <div class="auth0-features__grid">
        <app-auth0-feature
          title="Citrix"
          description="The road to becoming Citrix Certified doesn't need to be long and winding. Use our simple-to-follow learning paths to guide your Learning Journey."
          resourceUrl="/"
          icon="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/586f47e63131c122c2fad0ccece8e3c766de4fd8/book.svg"
        ></app-auth0-feature>
        <app-auth0-feature
          title="BigFix"
          description="HCL BigFix is the only endpoint management platform that enables IT operations and security teams to fully automate discovery, management and remediation - whether its on-premise, virtual, or cloud - regardless of operating system, location or connectivity. Learn from the technical experts and get hands-on experience with BigFix training."
          resourceUrl="/"
          icon="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/586f47e63131c122c2fad0ccece8e3c766de4fd8/book.svg"
        ></app-auth0-feature>
        <app-auth0-feature
          title="Silverfort"
          description="Learn how Silverfort enables adaptive multi-factor authentication across entire networks and cloud environments, including proprietary systems Understand what's different about Silverfort's solution and approach Review Silverfort's key benefits and capabilities."
          resourceUrl="/"
          icon="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/586f47e63131c122c2fad0ccece8e3c766de4fd8/book.svg"
        ></app-auth0-feature>
        <app-auth0-feature
        title="Cyolo"
        description="Learn more about how we enable secure access to applications, resources, workstations, servers and files. Discover the full functionality of the Cyolo platform in a dedicated 1:1 session with a zero trust expert."
        resourceUrl="/"
        icon="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/586f47e63131c122c2fad0ccece8e3c766de4fd8/book.svg"
      ></app-auth0-feature>
      <app-auth0-feature
      title="Okta"
      description="Get hands-on experience creating and configuring users and applications and learn about best practices and troubleshooting techniques to help maximize your Okta investment."
      resourceUrl="/"
      icon="https://raw.githubusercontent.com/M3rzh1n/ISoft-Demo/586f47e63131c122c2fad0ccece8e3c766de4fd8/book.svg"
    ></app-auth0-feature>
      </div>
    </div>
  `,
})
export class Auth0FeaturesComponent {}
