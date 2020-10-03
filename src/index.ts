import 'reflect-metadata'

import { Container } from 'typedi'
import { ExampleService, InjectedService } from './service/exampleService'
import { ConcreteInjectedService } from './service/concreteInjectedService'

function main() {
  Container.set(InjectedService, new ConcreteInjectedService())
  const serviceInstance = Container.get(ExampleService)
  // we request an instance of ExampleService from TypeDI
  serviceInstance.injectedService.printMessage()
}
main()
