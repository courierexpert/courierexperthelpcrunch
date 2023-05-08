import Foundation
import Capacitor
import HelpCrunchSDK

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(HelpcrunchPlugin)
public class HelpcrunchPlugin: CAPPlugin {

    private let implementation = Helpcrunch()

    @objc func initialise(_ call: CAPPluginCall) {
        let configuration = HCSConfiguration(forOrganization: "courierexpert", applicationId: "2", applicationSecret: "nKujk3hZnmC32ycpjBYsN02IaK8+c61VbesD9Vxy0BW6VdxQ1p1SluhA1etqbnWWjivmi4aQnfHvHS7lNLcoAA==")

        HelpCrunch.initWith(configuration, user: nil) { (error) in
            if error != nil {
                call.reject("Helpcrunch failed to initialise")
            } else {
                call.resolve([ "success": "Helpcrunch initialised" ])
            }
        }
    }

    @objc func show(_ call: CAPPluginCall) {
        guard let bridge = self.bridge else { return }

        let viewController = bridge.viewController;

        if let viewController = viewController {
            HelpCrunch.show(from: viewController) { (error) in
              call.resolve([ "success": "Helpcrunch is showing" ])
            }
        }

    }
}
