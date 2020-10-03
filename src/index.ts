import 'reflect-metadata'

import { Container, Service } from 'typedi'

@Service()
class ExampleInjectedService {
  public printMessage() {
    console.log('I am alive!')
  }
}

@Service()
class ExampleService {
  public injectedService: ExampleInjectedService
  public constructor(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    _injectedService: ExampleInjectedService
  ) {
    this.injectedService = _injectedService
  }
}

function main() {
  const serviceInstance = Container.get(ExampleService)
  // we request an instance of ExampleService from TypeDI
  serviceInstance.injectedService.printMessage()
}
main()
