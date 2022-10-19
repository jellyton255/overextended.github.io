---
title: Skill Check
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### lib.skillCheck

Runs a skill check with the defined difficulty.

<Tabs>
<TabItem value='Lua'>

```lua
lib.skillCheck(difficulty)
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

lib.skillCheck(difficulty)
```
</TabItem>
</Tabs>

* difficulty: `easy` or `medium` or `hard` or `object` 
  * Can set custom difficulty by sending a object instead of string
    * { areaSize: `number`, speedMultiplier: `number` }
      * easy: { areaSize: 275, speedMultiplier: 1 }
      * medium: { areaSize: 290, speedMultiplier: 1.5 }
      * hard: { areaSize: 295, speedMultiplier: 1.75 }
    * `areaSize` works inverse, so smaller value means bigger zone.
  * Sending an array will chain the checks together and return false if one fails and true if all succeed

### Usage Example

<Tabs>
<TabItem value='Lua'>

```lua
local success = lib.skillCheck({'easy', 'easy', {areaSize = 250, speedMultiplier = 2}, 'hard'})
```
</TabItem>
<TabItem value='JS/TS'>

```ts
import lib from '@overextended/ox_lib/client'

const success = await lib.skillCheck(['easy', 'easy', {areaSize: 250, speedMultiplier: 2}, 'hard'])
```
</TabItem>
</Tabs>

![Image](https://i.imgur.com/RWSWZ1I.png)