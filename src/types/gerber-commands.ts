/**  Comment A human readable comment, does not affect the image. 4.1 */
export interface Comment {
  command_code: "G04"
  comment: string
}

/**  Mode Sets the unit to mm or inch. 4.2.1 */
export interface SetUnit {
  command_code: "MO"
}

/**  Sets the coordinate format, e.g. the number of decimals.*/
export interface SetCoordinateFormat {
  command_code: "FS"
}

/**  Aperture define Defines a template-based aperture, assigns a D code to it. 4.3 */
export interface DefineAperature {
  command_code: "AD"
}

/**  Aperture macro Defines a macro aperture template. 4.5 */
export interface DefineMacroAperatureTemplate {
  command_code: "AM"
}

/**  (nn≥10) Sets the current aperture to D code nn. 4.6 */
export interface SetCurrentAperatureDCode {
  command_code: "Dnn"
}

/**
 * Plot operation
 * Outside a region statement D01 creates a draw or arc object with the current
 * aperture. Inside it adds a draw/arc segment to the contour under construction.
 * The current point is moved to draw/arc end point after the creation of the draw/arc.
 * */
export interface PlotOperation {
  command_code: "D01"
}

/**  D02 moves the current point to the coordinate in the command. It does not create an object.*/
export interface MoveOperation {
  command_code: "D02"
}

/** 
 * Creates a flash object with the current aperture. The current
 * point is moved to the flash point.
 */
export interface FlashOperation {
  command_code: "D03"
}

/**  Sets linear/circular mode to linear. */
export interface SetMovementModeToLinear {
  command_code: "G01"
}

/**  Sets linear/circular mode to clockwise circular. */
export interface SetMovementModeToClockwiseCircular {
  command_code: "G02"
}

/**  Sets linear/circular mode to counterclockwise circular. */
export interface SetMovementModeToCounterclockwiseCircular {
  command_code: "G03"
}

/**  A G75 must be called before creating the first arc. */
export interface CreateArc {
  command_code: "G75"
}

/**  Loads the polarity object transformation parameter. */
export interface LoadPolarity {
  command_code: "LP"
}

/** Load mirroring Loads the mirror object transformation parameter. */
export interface LoadMirroring {
  command_code: "LM"
}

/** Loads the rotation object transformation parameter. */
export interface LoadRotation {
  command_code: "LR"
}

/** Loads the scale object transformation parameter. */
export interface LoadScaling {
  command_code: "LS"
}

/**  Starts a region statement which creates a region by defining its contours. */
export interface StartRegionStatement {
  command_code: "G36"
}

/**  Ends the region statement */
export interface EndRegionStatement {
  command_code: "G37"
}

/**
 * Aperture block Opens a block aperture statement and assigns its aperture
 * number or closes a block aperture statement */
export interface AperatureBlock {
  command_code: "AB"
}

/** Open or closes a step and repeat statement. */
export interface StepAndRepeat {
  command_code: "SR"
}

/**  Attribute on file Set a file attribute. */
export interface AddAttributeOnFile {
  command_code: "TF"
}

/**  Add an aperture attribute to the dictionary or modify it. */
export interface AddAttributeOnAperature {
  command_code: "TA"
}

/**  object Add an object attribute to the dictionary or modify it. */
export interface AddAttributeOnObject {
  command_code: "TO"
}

/**  Attribute delete Delete one or all attributes in the dictionary. */
export interface DeleteAttribute {
  command_code: "TD"
}

/**  End of file. 4.13 */
export interface EndOfFile {
  command_code: "M02"
}

export type GerberCommand = 