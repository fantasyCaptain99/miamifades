"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Check, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  name: string;
  image: string;
  role: string;
}

interface Service {
  name: string;
  duration: string;
  price: string;
  description: string;
}

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  member: TeamMember | null;
}

const services: Service[] = [
  {
    name: "The Fade",
    duration: "45+ mins",
    price: "$65+",
    description: "A blended haircut crafted with precision, balance, and smooth transitions.",
  },
  {
    name: "The Classic",
    duration: "20 mins",
    price: "$55",
    description: "A clean, classic cut tailored to your structure.",
  },
  {
    name: "The Precision",
    duration: "1 hour",
    price: "$65",
    description: "Designed for clients with long hair styles who demand refined symmetry.",
  },
  {
    name: "The Hairline",
    duration: "30 mins",
    price: "$45",
    description: "A clean and defined hairline shape up using advanced techniques.",
  },
  {
    name: "The Beard",
    duration: "30 mins",
    price: "$45",
    description: "A full beard grooming transformation with structured shaping.",
  },
  {
    name: "The Cuban Shave",
    duration: "1 hour",
    price: "$56",
    description: "Our signature hot-towel razor shave inspired by classic traditions.",
  },
];

// Generate available time slots based on the selected date
function getAvailableTimeSlots(date: Date | undefined, memberName: string): string[] {
  if (!date) return [];
  
  const dayOfWeek = date.getDay();
  
  // Closed on Sundays
  if (dayOfWeek === 0) return [];
  
  // Generate time slots between 9 AM and 7 PM
  const baseSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM"
  ];
  
  // Simulate some booked slots based on date and member
  const seed = date.getDate() + memberName.length;
  const bookedIndices = new Set<number>();
  for (let i = 0; i < 6; i++) {
    bookedIndices.add((seed * (i + 1) * 3) % baseSlots.length);
  }
  
  return baseSlots.filter((_, index) => !bookedIndices.has(index));
}

export function BookingDialog({ open, onOpenChange, member }: BookingDialogProps) {
  const [step, setStep] = useState<"service" | "datetime" | "confirm">("service");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { toast } = useToast();

  const availableSlots = useMemo(() => {
    return getAvailableTimeSlots(selectedDate, member?.name || "");
  }, [selectedDate, member?.name]);

  const handleClose = () => {
    onOpenChange(false);
    // Reset state after close animation
    setTimeout(() => {
      setStep("service");
      setSelectedService(null);
      setSelectedDate(undefined);
      setSelectedTime(null);
    }, 200);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep("datetime");
  };

  const handleBack = () => {
    if (step === "datetime") {
      setStep("service");
      setSelectedTime(null);
      setSelectedDate(undefined);
    } else if (step === "confirm") {
      setStep("datetime");
    }
  };

  const handleContinue = () => {
    if (step === "datetime" && selectedDate && selectedTime) {
      setStep("confirm");
    }
  };

  const handleConfirm = () => {
    // Here you would typically submit to your booking API
    const bookingDate = selectedDate?.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    
    console.log("[v0] handleConfirm called");
    console.log("[v0] member:", member?.name);
    console.log("[v0] selectedService:", selectedService?.name);
    console.log("[v0] bookingDate:", bookingDate);
    console.log("[v0] selectedTime:", selectedTime);
    
    const toastResult = toast({
      title: "Booking Confirmed!",
      description: `Your appointment with ${member?.name} for ${selectedService?.name} on ${bookingDate} at ${selectedTime} has been confirmed. A confirmation email will be sent shortly.`,
    });
    
    console.log("[v0] toast result:", toastResult);
    
    handleClose();
  };

  const disabledDays = [
    { dayOfWeek: [0] }, // Sundays
    { before: new Date() }, // Past dates
  ];

  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90dvh] overflow-hidden p-0 flex flex-col">
        {/* Header with Member Info */}
        <div className="border-b border-border p-6 pb-4 flex-shrink-0">
          <DialogHeader className="flex-row items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <DialogTitle className="font-serif text-2xl text-foreground">
                Book with {member.name}
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </div>
          </DialogHeader>

          {/* Step Indicator */}
          <div className="flex items-center gap-2 mt-4">
            {["Service", "Date & Time", "Confirm"].map((label, index) => {
              const stepIndex = index;
              const currentIndex = step === "service" ? 0 : step === "datetime" ? 1 : 2;
              const isActive = stepIndex === currentIndex;
              const isCompleted = stepIndex < currentIndex;

              return (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-colors",
                      isCompleted && "bg-primary text-primary-foreground",
                      isActive && "bg-primary text-primary-foreground",
                      !isActive && !isCompleted && "bg-muted text-muted-foreground"
                    )}
                  >
                    {isCompleted ? <Check className="w-3 h-3" /> : index + 1}
                  </div>
                  <span
                    className={cn(
                      "text-sm hidden sm:block",
                      isActive ? "text-foreground font-medium" : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </span>
                  {index < 2 && (
                    <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content - scrollable so time slots and footer stay visible on mobile */}
        <div className="p-6 flex-1 min-h-0 overflow-y-auto">
          {/* Step 1: Service Selection */}
          {step === "service" && (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground mb-4">Select a Service</h3>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => handleServiceSelect(service)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border border-border transition-all duration-200",
                        "hover:border-primary hover:bg-primary/5",
                        selectedService?.name === service.name && "border-primary bg-primary/5"
                      )}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-serif text-lg text-foreground">{service.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <span className="text-lg font-medium text-primary whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === "datetime" && (
            <div className="space-y-6">
              {/* Selected Service Summary */}
              {selectedService && (
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <span className="font-medium text-foreground">{selectedService.name}</span>
                    <span className="text-muted-foreground mx-2">-</span>
                    <span className="text-muted-foreground">{selectedService.duration}</span>
                  </div>
                  <span className="font-medium text-primary">{selectedService.price}</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Calendar */}
                <div>
                  <h3 className="font-medium text-foreground mb-3">Select Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setSelectedTime(null);
                    }}
                    disabled={disabledDays}
                    className="rounded-xl border border-border"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <h3 className="font-medium text-foreground mb-3">
                    {selectedDate ? "Available Times" : "Select a date first"}
                  </h3>
                  {selectedDate ? (
                    availableSlots.length > 0 ? (
                      <ScrollArea className="h-[300px]">
                        <div className="grid grid-cols-2 gap-2 pr-4 ml-3">
                          {availableSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={cn(
                                "p-3 text-sm rounded-lg border border-border transition-all duration-200",
                                "hover:border-primary hover:bg-primary/5",
                                selectedTime === time &&
                                  "border-primary bg-primary text-primary-foreground hover:bg-primary"
                              )}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </ScrollArea>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
                        <p>No available times</p>
                        <p className="text-sm">Please select another date</p>
                      </div>
                    )
                  ) : (
                    <div className="flex items-center justify-center h-[300px] border border-dashed border-border rounded-xl ml-3 pl-2.5">
                      <p className="text-muted-foreground text-sm">Select a date to see available times</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === "confirm" && selectedService && selectedDate && selectedTime && (
            <div className="space-y-6">
              <h3 className="font-medium text-foreground">Booking Summary</h3>
              
              <div className="space-y-4 p-6 rounded-xl bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-medium text-foreground">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-foreground">{selectedService.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span className="text-foreground">
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span className="text-foreground">{selectedTime}</span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Total</span>
                  <span className="text-xl font-semibold text-primary">{selectedService.price}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                By confirming, you agree to our booking policy. A confirmation will be sent to your email.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions - always visible at bottom */}
        <div className="border-t border-border p-6 pt-4 flex items-center justify-between flex-shrink-0 bg-background">
          {step !== "service" ? (
            <Button
              variant="ghost"
              onClick={handleBack}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {step === "datetime" && (
            <Button
              onClick={handleContinue}
              disabled={!selectedDate || !selectedTime}
              className="gap-2"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}

          {step === "confirm" && (
            <Button onClick={handleConfirm} className="gap-2 px-8">
              Confirm Booking
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
