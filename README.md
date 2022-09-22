# plugin_list

Plugin to install with bds core

## Schema

```typescript
{
  name: string,
  fileName?: string,
  url: string,
  type?: "zip"|"jar"|"raw",
  platforms: pluginPlatform[],
  dependes?: (string|pluginConfig)[],
  hooksScript?: string
}
```
