import { browser } from './browser'
import { BrokerOptions } from './brokers/broker.broker'
import { WebBrokerOptions } from './brokers/web.broker'

export const WEB_MESSAGE_TYPE = 'message-broker'

export const DEFAULT_OPTIONS: BrokerOptions = {
    // namespace: 'default',
    // no namespace by default to reduce message size
    usePort: true,
    allowExternal: false,
}

export const DEFAULT_WEB_OPTIONS: WebBrokerOptions = {
    ...DEFAULT_OPTIONS,
    targetOrigin: location ? location.href : null,
    extensionId: (browser.runtime || {}).id,
}
