import { Oauth2SchemeOptions } from '../../../schemes/oauth2'
import { ProviderOptions } from '../../index'

export interface FacebookProviderOptions
  extends ProviderOptions,
    Oauth2SchemeOptions {}

export default FacebookProviderOptions
