import { Service } from 'typedi'

export abstract class InjectedService {
  abstract printMessage(): void
}

@Service()
export class ExampleService {
  public injectedService: InjectedService
  public constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    _injectedService: InjectedService
  ) {
    this.injectedService = _injectedService
  }
}
