// CalendarManager.m
#import "CustomCalculation.h"
#import <React/RCTLog.h>

@implementation CustomCalculation

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);
RCT_EXPORT_METHOD(show:(RCTResponseSenderBlock)callback)
{
  double sum = 0;
    
  for (int i = 0; i < 1000; i++) {
    for (int j = 0; j < 1000; j++) {
      for (int k = 0; k < 1000; k++) {
         sum = sum + i + j + k;
      }
    }
  }
  NSString *result = [[NSString alloc] initWithFormat:@"%f", sum];
  callback(@[result]);
}
@end
