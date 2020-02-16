# EventHub
A basic publisher and subscription pattern that shows the power of typescript. 

## Examples:

import EventBus and new up the class to get an instance.

### Register a subscription:

`let id = eBus.subscribe('test', function (obj) { console.log(JSON.stringify(obj)); });`

for each subscription a new unquie id is returned to allow the consumer to deregister their interets later. If you don't save the returned Id, you won't be able to clean up.

### To remove a subscription:
`eBus.unsubscribe(id);`

### Event triggering
To trigger an event : (the second paramter is optional, but allows the caller to provide a payload of data to the subscribers.)

`eBus.trigger('test', {'key': 1});`

