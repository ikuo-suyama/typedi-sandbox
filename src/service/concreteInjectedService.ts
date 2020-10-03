import { Service } from 'typedi'
import { InjectedService } from './exampleService'

@Service()
export class ConcreteInjectedService implements InjectedService {
  public printMessage() {
    console.log('I am alive!')
  }
}
