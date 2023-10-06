# FAQ

## What does the LDES Server do?

In short, the LDES Server allows for versioned immutable members to be published as a structured event stream (LDES). The LDES Server facilitates the creation of views, fragments (pagination), control over data retention, and caching, but it's not required to publish LDES. Static files can also be valid LDES.

::: info
The LDES Server component is not mandatory for publishing LDES. This can also be achieved using simple static hosting, at the expense of advanced features like fragmentation and caching. Such static hosting may not be sufficient - a spec-compliant LDES Client should be able to make assumptions regarding immutability of fragments.
:::
